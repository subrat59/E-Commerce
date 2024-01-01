import express from "express"
import { addProduct, addToCart, removeCart, searchProduct, updateProduct, viewProduct } from "../Controllers/Product.js"
import { verifyToken } from "../../../youtube/server/Utils/verifyToken.js"
import { upload } from "../middlewares/multer.middleware.js"

const router=express.Router()
router.post("/addproduct",verifyToken,upload.single("image"),addProduct)
router.get("/searchproduct",verifyToken,searchProduct)
router.get("/viewproduct/:productId",verifyToken,viewProduct)
router.put("/updateproduct/:productId",verifyToken,updateProduct)
router.put("/addtocart/:productId",verifyToken,addToCart)
router.put("/removecart/:productId",verifyToken,removeCart)

export default router