import express from "express";
import { createUserHandler } from "../controller/user.controller";
import { validateRequest } from "./middleware";
import { createUserSchema } from "./middleware/schemas/user.schema";

export const router = express.Router();

router.post("/user", validateRequest(createUserSchema), createUserHandler);

export default router;