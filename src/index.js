import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});


import express from "express";
import { connectDb } from "./db/connect-db.js";

const app = express()

;(async () => {
  try {
    await connectDb();
    app.on("error", (error) => {
      console.log("Error in running server @@@:-", error.message);
      throw error;
    });
    
    app.listen(process.env.PORT, () => {
      console.log("!!! App is listening on port", process.env.PORT);
    });
  } catch (error) {
    console.log("Error in index.js:",error.message);
  }
})();

// console.log("object",process.env.MONGO_URI)
// ;(async () => {
//   try {
//     const dbConnection = await mongoose.connect(process.env.MONGO_URI,{
//       dbName:DB_NAME,
//     })
//     console.log("Connected to the DB !!!!!!!!!!!",dbConnection.connection.host)
//     app.on("error", (error)=>{
//       console.log("Error in running server @@@:-",error.message)
//       throw error;
//     })

//     app.listen(process.env.PORT,()=>{
//       console.log("@@@ App is listening on port",process.env.PORT);

//     })
//   } catch (error) {
//     console.error("Error@@@@@@@@@", error);
//     throw error;
//     // return;
//     // process.exit(1);
//   }
// })();
