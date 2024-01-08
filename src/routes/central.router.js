import { Router } from "express";
import { userRouter } from "./user.routes.js";

const centralRouter = Router();

centralRouter.use("/users", userRouter);

export { centralRouter };
