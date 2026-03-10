import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default:false
    }
})
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return ;
   return this.password = await bcrypt.hash(this.password, 10);
})
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.genreateJWT = function () {
   return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
export const UserModel = mongoose.model("User", userSchema);