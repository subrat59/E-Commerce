import express from "express";
import { makeOrder, viewCart } from "../Controllers/Cart.js";
import { verifyToken } from "../../../youtube/server/Utils/verifyToken.js";

const router=express.Router()


router.get("/viewcart",verifyToken,viewCart)
router.post("/makeorder",verifyToken,makeOrder)

export default router