import mongoose from "mongoose"

const categoryEnum = ["laptop","mobile","oil"]

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please add a name"]
    },
    category:{
        type:String,
        enum:categoryEnum,
    },
    company:{
        type:String
    },
    rating:{
        type:Number,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String
    }
},{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema)

export default Product