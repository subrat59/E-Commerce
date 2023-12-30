import express from "express"
import { addProduct, addToCart, removeCart, viewProduct } from "../Controllers/Product.js"
import { verifyToken } from "../../../youtube/server/Utils/verifyToken.js"

const router=express.Router()
router.post("/addproduct",addProduct)
router.get("/viewproduct",viewProduct)
router.put("/addtocart/:productId",verifyToken,addToCart)
router.put("/removecart/:productId",verifyToken,removeCart)

export default router