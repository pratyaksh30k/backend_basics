import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localPathFile) => {
  try{
    if(!localPathFile) return null;
    const res = await cloudinary.uploader.upload(localPathFile, {resource_type: "auto"});
    console.log("File uploaded successfully ", res.url);
    return res;
  }
  catch(err){
    fs.unlinkSync(localPathFile);
    return null;
  }
}

export default uploadOnCloudinary;