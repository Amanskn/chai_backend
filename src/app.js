import express from "express";
import { connectDb } from "./db/connect-db.js";

const app = express();
const { PORT } = process.env;

const startServer = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await connectDb();
      app.on("error", (error) => {
        console.log("Error in running server @@@:-", error.message);
        reject(error);
      });

      app.listen(PORT, () => {
        console.log("!!! App is listening on port", PORT);
        resolve();
      });
    } catch (error) {
      console.log("Error in app.js:", error.message);
      //   process.exit(1);

      reject(error);
    }
  });
};

export { startServer };
