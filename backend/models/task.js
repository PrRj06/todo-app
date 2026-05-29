import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    deadline:{
        type:Date
    },
    tag:{
        type:String,
        enum:["work","personal","health"],
        default:"personal"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{
    timestamps:true
});
const Task = mongoose.model("Task",taskSchema);
export default Task;