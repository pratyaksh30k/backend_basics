import dotenv from 'dotenv';
import connectDb from './db/index.js';

dotenv.config({ path: './.env' });

connectDb();

/*
import mongoose from "mongoose";
import { DB_NAME } from './constants.js';

(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
  }catch(err){
    console.log("MongoDB connection Failed", err);
    throw err;
  }
})();
*/