import express from "express";
import { getUserdatacontroller } from "../controller/user.controller.js";
const router = express.Router();

router.get("/:user",getUserdatacontroller)
export default router;