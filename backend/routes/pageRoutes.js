import express from "express";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();
router.get("/",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/index.html"));
})
router.get("/login",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/login.html"));
})
router.get("/signup",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/signup.html"));
})
router.get("/user",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/user.html"));
})

export default router;