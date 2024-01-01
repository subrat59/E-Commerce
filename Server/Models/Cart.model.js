import mongoose from "mongoose";

const CartSchema=mongoose.Schema({
    customerId:{
        type:String,
        required:true,
        unique:true
    },
    products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
          },
        },
      ]
},{timestamps:true})

export const Cart=mongoose.model("Cart",CartSchema)