import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log(
      "!!! Connected to the DB @ host:",
      dbConnection.connection.host
    );
  } catch (error) {
    console.error("Error@@@@@@@@@", error.message);
    // throw error;
    process.exit(1);
  }
};
