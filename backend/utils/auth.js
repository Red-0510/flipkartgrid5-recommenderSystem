import jwt from "jsonwebtoken"

export const sendToken = (user,res)=>{

    const token = user.getJWTToken();
    const options = {
        path:"/",
        expires:new Date(Date.now() + 1000 * 60 * 60), // 1hr
        httpOnly:true,
        sameSite:"lax"
    }
    res.cookie(String(user._id),token,options)
}

export const userAuth = async (req,res,next) =>{
    try{
        const token = req.headers.cookie?.split("=")[1];
        if(!token || token.length<=6){
            res.status(400)
            throw new Error("Token Expired Please Log in")
        }
        
        const data = jwt.verify(String(token),process.env.ACCESS_TOKEN_SECRET)

        // if(data.role==="admin"){
        //     res.status(400)
        //     throw new Error("Use admin routes for admin works")
        // }
        req.user = data
        next()
    }
    catch(err){
        next(err)
    }
}

export const adminAuth = async (req,res,next) =>{
    try{
        const token = req.headers.cookie?.split("=")[1];
        if(!token || token.length<=6){
            res.status(400)
            throw new Error("Token Expired Please Log in")
        }
        
        const data = jwt.verify(String(token),process.env.ACCESS_TOKEN_SECRET)

        if(data.role!=="admin"){
            res.status(404)
            throw new Error("You are not Authorised")
        }
        req.user = data
        next()
    }
    catch(err){
        next(err)
    }
}