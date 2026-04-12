import express from 'express';
export const isAuthenticated = (req,res,next)=>{
    if(!req.session.userId){
        return res.status(401).json({msg:"Not logged in"});
    }
    next();
}