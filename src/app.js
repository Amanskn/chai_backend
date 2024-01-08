import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./db/connect-db.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { centralRouter } from "./routes/central.router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { PORT, CORS_ORIGIN } = process.env;

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

// =============for parsing cookie data
app.use(cookieParser());

// ===================for parsing form data (usually it is in urlencoded format )
app.use(
  express.urlencoded({
    extended: false,
    limit: "16kb",
  })
);

// ===================for parsing json data
app.use(
  express.json({
    limit: "16kb",
  })
);

// ==================to take the content from temp folder
app.use(express.static(path.join(__dirname, "..", "public/temp")));

// =================custom middleware
// app.use((req, res, next) => {
//   console.log("Inside middleware");
//   next();
// });

// app.get("/test", async (req, res) => {
//   try {
//     res.status(200).json({
//       success: true,
//       msg: "all good",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: true,
//       msg: error.message,
//     });
//   }
// });

app.use("/api/v1", centralRouter);

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
