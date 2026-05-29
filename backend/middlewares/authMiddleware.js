import jwt from "jsonwebtoken";

export const isAuthenticated = (req,res,next)=>{
    const token = req.cookies?.auth_token;

    if(!token){
        return res.status(401).json({msg:"Not logged in"});
    }

    try{
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { id: payload.userId };
        next();
    }catch(err){
        return res.status(401).json({msg:"Invalid or expired session"});
    }
}