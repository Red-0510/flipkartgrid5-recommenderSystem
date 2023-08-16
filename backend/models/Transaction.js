import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const TransactionSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
            time:{
                type:Date,
            },
            quantity:{
                type:Number
            }
        }
    ],
    time:{
        type:Date
    }
},{
    timestamps:true
})
 
const Transaction = mongoose.model("Transaction",TransactionSchema)

export default Transaction