import Task from "../models/task.js";
export const userTasks = async(req,res)=>{
    try{
        if(!req.session.userId){
            return res.status(401).json({msg:"Unauthorise"});
        }
        const tasks = await Task.find({user: req.session.userId}).sort({createdAt: -1});
        res.json(tasks);
    }catch(err){
        return res.status(500).json({msg: 'Servre error'});
    }
};

export const addTask = async(req,res)=>{
    try{
        if(!req.session.userId){
            return res.status(401).json({msg: "Unauthorised"});
        }
        const {title,completed,deadline,tag} = req.body;
        const task = await Task.create({
            title,
            completed,
            deadline,
            tag,
            user: req.session.userId
        });
        return res.status(200).json(task);
    }catch(err){
        res.status(500).json({msg:"Server error"});
    }
}

export const deleteTask = async(req,res)=>{
    try{
        if(!req.session.userId){
            return res.status(401).json({msg:"Unauthorised"})
        }
        const {id} = req.params;
        const task = await Task.findOneAndDelete({
            _id: id,
            user: req.session.userId
        });
        if(!task){
            return res.status(404).json({msg:"Task not found"});
        }
        res.status(200).json({msg:"Task deleted"});
    }catch(err){
        res.status(500).json({msg:"Server error"});
    }
};

export const updateTask = async(req,res)=>{
    try{
        if(!req.session.userId){
            return res.status(401).json({msg:"Unauthorised"})
        }
        const {id} = req.params;
        const {title,completed,deadline,tag} = req.body;
        const task = await Task.findByIdAndUpdate(
            {_id: id, user:req.session.userId},
            {
                $set: { title, completed, deadline, tag }
            },
            { returnDocument:"after" } 
        );
        if(!task){
            return res.status(404).json({msg:"Task not found"});
        }
        return res.status(200).json({msg: "Task updated successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({msg:"Server error"});
    }
};