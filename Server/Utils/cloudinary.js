import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
  cloud_name: '__YOUR CLOUD NAME__', 
  api_key: '__YOUR API KEY__', 
  api_secret: '__YOUR API SECRET__' 
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
