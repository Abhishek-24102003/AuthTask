import { asyncHandler } from "../utils/asyncHandler.js";
import CustomError from "../utils/customError.js";

export const getUserdatacontroller = asyncHandler(async (req, res) => {
   
    const user = req.user
    if (!user) throw new CustomError(400, "user no found");
    res.status(200).json({
        success: true,
        user,
        message:"User data fetched"
    })
})