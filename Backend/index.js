import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";
import cors from "cors"
import userRouter from "./src/routes/user.routes.js";

const app = express()

connectToDB()

const PORT = process.env.PORT;

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.get("/",(req,res)=>{
    return res.json({
        message:"Server started"
    })
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.listen(PORT, ()=>{
    console.log("server is running on 3000")
})