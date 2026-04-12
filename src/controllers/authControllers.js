import User from "../models/user.js";
export const login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({msg:"User not found"});
    } 
    if(user.password !== password){
        return res.status(404).json({msg:"Invalid password"});
    }
    req.session.userId = user._id;
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
    res.json({msg:"Signup successfull"});
}