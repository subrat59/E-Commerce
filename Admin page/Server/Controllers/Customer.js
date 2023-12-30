import User from "../Models/Customer.model.js"
import bcrypt from "bcrypt"
import dotenv from 'dotenv'
import JWT from 'jsonwebtoken'
import { createError } from "../Utils/error.js"

dotenv.config({path:'../.env'})

export const signup=async (req,res)=>{
    try{
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser= new User({
            firstName:req.body.email,
            lastName:req.body.email,
            email:req.body.email,
            password:hash,
            img:req.body.email,
            mobileno:req.body.email

        })
        await newUser.save();
        console.log(newUser)
        res.status(200).send("User has been added successfully.")

    }catch(err){
        console.log("Can't create new User Signup",err)
    }
}

export const signin=async (req,res,next)=>{
    try {
        console.log("email",req.body)
        const user=await User.findOne({email:req.body.email})
        const isCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isCorrect) return next(createError(404,"Wrong Credentials"))
        user.password=""
        console.log(user)
        const accessToken=JWT.sign({
            id:user._id
        },"Hello")
        console.log("AccessToken is: ",accessToken)
        res.cookie("id",accessToken,{
            httpOnly:true,
            secure:true
        })
        res.status(200).json(user)
    } catch (error) {
               next(createError(100,"No User Found.Please Register."))
    }
}