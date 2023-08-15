import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import db from "./db.js"
import errorHandler from "./middlewares/error.js"
import userRoute from "./routes/userRoute.js"
import cors from "cors"


dotenv.config()

const originURLs = process.env.URLS.split(",");


const app = express()

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(
    cors({
      origin:originURLs,
      credentials:true,
    })
);

app.use("/api/user",userRoute)

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Connected to backend"
    })
})

app.use(errorHandler)

const PORT = process.send.PORT || 8000

app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`)
})
