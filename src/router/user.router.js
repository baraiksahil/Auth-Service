import userController from "../controller/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/api/v1/user", userController.createUser);

export default router;
