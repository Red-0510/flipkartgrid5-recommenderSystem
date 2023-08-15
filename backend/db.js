import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
let databaseUrl = process.env.DATABASE_DEV

if (process.env.NODE_ENV === "production") {
  databaseUrl = process.env.DATABASE_PROD
}
// connects to database
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

// If the connection Connnectd
mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection established.")
})

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err)
})

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected.")
})

process.on("SIGINT", () => {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination."
    )
    process.exit(0)
  })
})

export default db;
