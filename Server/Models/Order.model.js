import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,  //  0 for Pending and 1 for delivered.
        required:true,
        default:0
    }
},{timestamps:true})

export const Order=mongoose.model("Order",OrderSchema)