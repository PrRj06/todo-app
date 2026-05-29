import User from "../models/user.js";
export const getLoggedUser = async(req,res)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        return res.status(404).json({msg:"User not found"});
    }
    res.json({
        name:user.name,
        email:user.email,
        userId:user._id
    });
}