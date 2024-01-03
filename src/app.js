import { connectDb } from "./db/connect-db.js";
import { config } from "dotenv";
config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
// console.log("test inside app.js", process.env.PORT);

app.get("/", (req, res) => {
  res.send("Home");
});
const startServer = async () => {
  try {
    await connectDb();

    // Wrap the app.listen in a Promise
    const listenPromise = new Promise((resolve, reject) => {
      app.on("error", (error) => {
        console.log("Error in running server @@@:-", error.message);
        reject(error);
      });

      app.listen(port, () => {
        console.log("!!! App is listening on port", port);
        resolve();
      });
    });

    // Wait for both connectDb and app.listen to complete
    await listenPromise;

    //   console.log("Before return ");
    return "@@@";
  } catch (error) {
    throw error;
  }
};

export { startServer };

// ================================= my code where "app is listening" is logged after the
// ================================ normal log statement in index.js which is written after it's call,
// ======================== that is why there came a requirement to modify the app connection into a promise body
// export const startServer = async () => {
//   await connectDb();
//   app.on("error", (error) => {
//     console.log("Error in running server @@@:-", error.message);
//     throw error;
//   });

//   app.listen(port, () => {
//     console.log("!!! App is listening on port", port);
//   });
//   console.log("Before return ");
//   return "@@@";
// };
