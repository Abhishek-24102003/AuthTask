import { app } from "./src/app.js";
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js";
dotenv.config();
const port = process.env.PORT || 9000
connectDB()

app.listen(port, () => {
    console.log(`Server started at port:${port}`)
})