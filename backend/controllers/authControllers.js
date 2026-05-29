import jwt from "jsonwebtoken";
import User from "../models/user.js";

const createAuthToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "7d" });
};

const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000
};

export const login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({msg:"User not found"});
    } 
    if(user.password !== password){
        return res.status(404).json({msg:"Invalid password"});
    }
    const token = createAuthToken(user._id);
    res.cookie("auth_token", token, cookieOptions);
    res.redirect(`/user`);
};

export const signup = async(req,res)=>{
    const {name,email,password} = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
        return res.status(400).json({msg:"User already exist"});
    }
    const user = await User.create({
        name,
        email,
        password
    });
    res.redirect('/login');
};

export const logout = async(req,res)=>{
    res.clearCookie("auth_token", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/"
    });
    res.status(200).json({msg:"Logged Out"});
};