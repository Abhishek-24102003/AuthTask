import { UserModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import CustomError from "../utils/customError.js";

export const getUserdatacontroller = asyncHandler(async (req, res) => {
    let id = req.params.user;
    const user = await UserModel.findById(id);
    if (!user) throw new CustomError(400, "user no found");
    res.status(200).json({
        success: true,
        user,
        message:"User data fetched"
    })
})