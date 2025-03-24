import mongoose from "mongoose";
import connectDB from "./db.js"
import dotenv from "dotenv";
dotenv.config()

const app = express();

connectDB()

app.get('/:name/:email/:password', async(req, res)=>{
    try {
        await Customer.create
    } catch (error) {
        
    }
})