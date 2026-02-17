import userController from "../controller/user.controller.js";
import userMiddleware from "../middleware/user.middleware.js";

import express from "express";

const router = express.Router();

router.post(
  "/api/v1/user",
  userMiddleware.validateUser,
  userController.createUser,
);

router.post("/api/v1/user/signin", userController.signin);

router.get("/profile", userMiddleware.verifyToken, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user,
  });
});

export default router;
