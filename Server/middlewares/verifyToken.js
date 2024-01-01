import JWT from "jsonwebtoken";
import { createError } from "../Utils/error.js";

export const verifyToken=async (req,res,next)=>{
    const token=req.cookies.id
    if(!token) return createError(404,"Please SignIn")
    JWT.verify(token,"Hello",(err,user)=>{
        if(err) return createError(404,"Please SignIn")
        req.user=user
        next()
    })
}