import { UserModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import CustomError from "../utils/customError.js";
export const authMiddleware = asyncHandler(async (req, resizeBy, next) => {
    const token = req.cookies.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if(!decode) throw new CustomError(404,"Unauthorized user")
    const user = await UserModel.findById(decode.id);
    req.user = user;
    next()
})