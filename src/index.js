import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import {DB_NAME} from './constants.js'
import express from "express";

const app = express();


;(async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI,{
      dbName:DB_NAME,
    })    
    console.log("Connected to the DB !!!!!!!!!!!",dbConnection.connection.host)
    app.on("error", (error)=>{
      console.log("Error in running server @@@:-",error.message)
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log("@@@ App is listening on port",process.env.PORT);

    })
  } catch (error) {
    console.error("Error@@@@@@@@@", error);
    throw error;
    // return;
    // process.exit(1);
  }
})();

