import express from "express";
import { loginController, registerController, verifyEmailController } from "../controller/auth.controller.js";
const router = express.Router();
router.post("/register", registerController)
router.get("/verify-email/:token",verifyEmailController)
router.post("/login",loginController)
export default router;