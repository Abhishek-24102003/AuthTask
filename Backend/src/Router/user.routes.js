import express from "express";
import { getUserdatacontroller } from "../controller/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/",authMiddleware,getUserdatacontroller)
export default router;