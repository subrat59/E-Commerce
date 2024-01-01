import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
  cloud_name: 'dsjqd1zmw', 
  api_key: '366258218288984', 
  api_secret: 'jNll6mC9t6_zFOe9T9RHW2JZLaU' 
});


const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("File is uploaded on cloudinary.",response.url)
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log("File can't be uploaded in cloudinary.")
        return null
    }
}

export default uploadOnCloudinary