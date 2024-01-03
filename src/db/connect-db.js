import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { config } from "dotenv";

// ============================== Since in ESM way I need to configure dotenv wherever required because it would not work by simply congifuring in index.js only
// ================================ as it does in modulejs syntax
config();

const { MONGO_URI } = process.env;

export const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log(
      "!!! Connected to the DB @ host:",
      dbConnection.connection.host
    );
  } catch (error) {
    console.error("Error@@@@@@@@@", error.message);
    throw error;
    // process.exit(1);
  }
};
