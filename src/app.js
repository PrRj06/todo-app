import dotenv from "dotenv";
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false
}));

app.use("/",pageRoutes)             
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/task", taskRoutes) 

export default app;