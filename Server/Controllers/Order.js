import { Order } from "../Models/Order.model.js"
import { createError } from "../Utils/error.js"

export const pendingOrder=async (req,res,next)=>{
    try {
        const orders=await Order.find({status:0})
        res.status(200).send(orders) 
    } catch (error) {
        next(createError(404,"Can't show pending Orders."))
    }
}

export const deliveredOrder=async (req,res,next)=>{
    try {
        const orders=await Order.find({status:1})
        res.status(200).send(orders) 
    } catch (error) {
        next(createError(404,"Can't show pending Orders."))
    }
}

export const changeOrderStatus=async (req,res,next)=>{
    try {
       const updateStatus=await Order.findByIdAndUpdate(req.params.orderId,{
        $set: {status:1}
       },{new:true}) 
       res.status(200).send(updateStatus)
    } catch (error) {
        next(createError(404,"CAn't change the status of the order."))
    }
}