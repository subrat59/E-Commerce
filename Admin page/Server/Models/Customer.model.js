import mongoose from "mongoose"


const CustomerSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        default:null,
    }
},{timestamps:true});

 const Customer= mongoose.model("Customer",CustomerSchema)
 export default Customer