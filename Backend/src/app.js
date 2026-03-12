import express from "express"
export const app = express();
import authRouter from "./Router/auth.routes.js"
import userRouter from "./Router/user.routes.js"
import errorMiddleware from "./middlewares/error.middleware.js";
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from "cookie-parser"
import cors from "cors"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('views', path.join(__dirname, 'views'));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use("/api/auth", authRouter);
app.use("/api/user",userRouter)


//error middleware
app.use(errorMiddleware)