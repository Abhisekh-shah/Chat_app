import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser";
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth_route.js"
import messageRoutes from "./routes/message_route.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
    connectDB()
})