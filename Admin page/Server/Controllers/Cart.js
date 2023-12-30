import { Cart } from "../Models/Cart.model.js";
import { Order } from "../Models/Order.model.js";
import { Product } from "../Models/Product.model.js";
import { createError } from "../Utils/error.js";



export const viewCart=async (req,res,next)=>{
    try {
        const cart=await Cart.find({customerId:req.user.id})
        res.status(200).json(cart)
    } catch (error) {
        next(createError(404,error))
    }
}

export const makeOrder=async (req,res,next)=>{
    try {
        const cart=await Cart.findOne({customerId:req.user.id})
        const products=cart.products
        
        await products.map(async(prod)=>{
            const currentProd=await Product.findOne({_id:prod.productId})
                const newOrder=new Order({
                    customerId:req.user.id,
                    productId:prod.productId,
                    quantity:prod.quantity,
                    price: (currentProd.price*prod.quantity),
                    address:req.body.address
                })
                newOrder.save()
        })
        cart.products = [];
        await cart.save();
        res.status(200).send("OrderPlaced Successfully")
    } catch (error) {
        next(createError(404,"Can't make order"))
    }
}