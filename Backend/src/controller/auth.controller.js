import { UserModel } from "../models/user.model.js";
import { SendMail } from "../services/mail.service.js";
import { EmailverificationTemplate } from "../template/verification.template.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import CustomError from "../utils/customError.js";
import jwt from "jsonwebtoken"
export const registerController = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body;
    if (!email || !password) throw new CustomError(400, "All fields are required!")
    let existed = await UserModel.findOne({ email });
    if (existed) throw new CustomError(400, "user all ready registered!!");

    const newuser = await UserModel.create({
        name,
        email,
        password
    })
    const token = newuser.genreateJWT();
    
    //send verify email
    const mailURL = `http://localhost:3000/api/auth/verify-email/${token}`
    const body = EmailverificationTemplate(newuser.name, mailURL);
    SendMail(email, "Email Verification", body);
    
    res.status(200).json({
        success: true,
        message:"Email verification link send for regestration.",
        user:newuser
    })
})

export const verifyEmailController = asyncHandler(async (req, res) => {
    const token = req.params.token;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if(!decode) throw new  CustomError(401,"Unauthorized email")
    const user = await UserModel.findById(decode.id);
    user.isVerified = true;
    await user.save();
    
    res.render("index");
})

export const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw new CustomError(400, "All fields are required");
    const userExist = await UserModel.findOne({ email });
    if (!userExist) throw new CustomError(400, "Account not found register please!");
    const verify = await userExist.comparePassword(password);
    if (!verify) throw new CustomError(401, "Invalid credintials check email or password!")
    const token = userExist.genreateJWT();
    res.cookie("token", token);
    res.status(200).json({
        success: true,
        message: "Logged on",
        user:userExist
    })
})