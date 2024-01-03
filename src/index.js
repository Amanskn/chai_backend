import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

// check
import express from "express";
import { startServer } from "./app.js";

const app = express();

(async () => {
  try {
    await startServer();
    // console.log("After server start");
  } catch (error) {
    console.log("Error in index.js:", error.message);
    process.exit(1);
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
