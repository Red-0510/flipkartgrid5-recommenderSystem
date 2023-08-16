import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please add a name"]
    },
    email:{
        type:String,
        required:[true,"Please add an email"],
        unique:[true,"email already registered"],
        trim:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    role:{
        type:String,
        default:"user",
        immutable:true,
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minLength:[6,"password must be atleast 6 characters long"],
    },
    cart :[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
            },
            time:{
                type:Date,
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
    purchases:[
        {
            transactionId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Transaction"
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
            ]
        }
    ]
},{
    timestamps:true
})

// generate JWT Access Token 
userSchema.methods.getJWTToken = function(){
    const accessToken = jwt.sign(
        {
            id:this._id,
            role:this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1hr",
        }
    )

    return accessToken
}

// password compare method
userSchema.methods.comparePassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password)
}

// hashing the password whenever it is modified before saving to DB
userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password,salt);
    this.password = hashedPassword;
    next()
});

const User = mongoose.model("User",userSchema)

export default User