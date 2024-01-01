import mongoose from "mongoose"


const AdminSchema=new mongoose.Schema({
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
        default:"",
    }
},{timestamps:true});

 const Admin= mongoose.model("Admin",AdminSchema)
 export default Admin