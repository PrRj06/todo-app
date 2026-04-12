import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected");
    }catch(err){
        console.log("Error :- " + err);
        process.exit(1);
    }
}
export default connectDB;