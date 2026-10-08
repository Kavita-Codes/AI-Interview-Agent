import mongoose from "mongoose";

const connectToDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
   } catch (error) {
      return res.status(500).json({
         message:"database error"
      })
   }
}

export default connectToDB