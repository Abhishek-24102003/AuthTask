import mongoose from "mongoose";
export const connectDB = async() => {
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/authTest");
        if(res)return console.log("MongoDb connected!!")
    } catch (error) {
        console.log("MongoDB connection Failed!!",error)
    }
}