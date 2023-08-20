import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const sendToken = (user,res)=>{

    const token = user.getJWTToken();
    res.cookie("token",token,{
        httpOnly: false,
        expires : new Date(Date.now() + 1000 * 86400),
        sameSite:'none',
        secure:true,
    });
}

export const userAuth = async (req,res,next) =>{
    try{
        // console.log(req.cookies)
        // const token = req.cookies.cookie?.split("=")[1];
        const token = req.cookies.token;
        // console.log(token)
        if(!token || token.length<=6){
            res.status(400)
            throw new Error("Token Expired Please Log in")
        }
        
        const data = jwt.verify(String(token),process.env.ACCESS_TOKEN_SECRET)

        // if(data.role==="admin"){
        //     res.status(400)
        //     throw new Error("Use admin routes for admin works")
        // }
        const user =await User.findById(data.id).select("-password")
        // console.log(user);
        req.user = user
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