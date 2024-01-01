import express from 'express'
import { changeOrderStatus, deliveredOrder, pendingOrder } from '../Controllers/Order.js'
import { verifyToken } from '../../../youtube/server/Utils/verifyToken.js'

const router=express.Router()
router.get("/pending",verifyToken,pendingOrder)
router.get("/delivered",verifyToken,deliveredOrder)
router.put("/changeorderstatus/:orderId",verifyToken,changeOrderStatus)

export default router