import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const InteractionSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    point:{
        type:Number
    },
    time:{
        type:Date
    }
},{
    timestamps:true
})

const Interaction = mongoose.model("Interaction",InteractionSchema)

export default Interaction