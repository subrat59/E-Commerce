import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const connection=async ()=>{
    try {
     const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB}`)
        console.log("DB connected.")
    } catch (error) {
        console.log("Can't connect to DataBase.",error)        
    }
}

export default connection