import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecom",
    });
    console.log("MongoDB Connected...");
    
  } catch (error) {
    console.error("Error conencting to MongoDB", error.message)
  }
};

export default connectDB