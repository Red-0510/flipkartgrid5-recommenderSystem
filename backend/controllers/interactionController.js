import Interaction from "../models/Interaction.js";
import Product from "../models/Product.js";

export const createInteraction = async(req,res,next)=>{
    try{
        const {productId,point} = req.body;
        const product = await Product.findById(productId)
        if(!product){
            throw new Error("product not found")
        }
        const interaction = await Interaction.find({userId:req.user._id,productId:productId})
        const currentTime = Date.now();
        if(!interaction){
             const newInteraction = await Interaction.create({
                userId:req.user._id,
                productId,
                point,
                currentTime,
             })
        }
        else{
            const m=1000;
            const lastTime = interaction.time.mongoDBDate.getTime();
            const difference = currentTime - lastTime;
            const decrease = difference/m;
            interaction.point = interaction.point - decrease;
            await interaction.save();
        }
        res.status(200).json({
            success:true,
            message:"Interaction Added",
            data:[]
        })
    }catch(err){
        next(err)
    }
}