import mongoose from "mongoose";
const connectDB = async()=>{
    if(mongoose.connection.readyState === 1){
        return mongoose.connection;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected");
        return mongoose.connection;
    }catch(err){
        console.log("Error :- " + err);
        throw err;
    }
}
export default connectDB;