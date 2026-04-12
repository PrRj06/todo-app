import dotenv from "dotenv"
dotenv.config();
import express from "express";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
connectDB();

const app = express();
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


app.listen(process.env.PORT,()=>{
    console.log("Server is live");
})