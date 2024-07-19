import dotenv from "env";
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})




connectDB()







/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";
*/

/*import Express from "express";
(async () => {
    try {
        await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
        application.on("error", (error) => {
            console.log("error", error);
            throw error
        })
        application.listen(process.env.PORT, () => {
            console.log('app is listening ${process.env.PORT}')
        })
    } catch (error) {
        console.error("error:", error)  
        throw error
    }
})()*/