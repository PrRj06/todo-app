import mongoose from "mongoose";
const connectDB = async()=>{
    if(mongoose.connection.readyState === 1){
        return mongoose.connection;
    }

    const uri = process.env.MONGODB_URI;
    if(!uri){
        throw new Error("MONGODB_URI is missing. Set it in your environment variables.");
    }

    if(!/^mongodb(\+srv)?:\/\//.test(uri)){
        throw new Error("MONGODB_URI must start with mongodb:// or mongodb+srv://");
    }

    if(uri.includes("<") || uri.includes(">")){
        throw new Error("MONGODB_URI appears to contain placeholders. Replace them with real Atlas credentials.");
    }

    try{
        await mongoose.connect(uri);
        console.log("Database Connected");
        return mongoose.connection;
    }catch(err){
        console.log("Error :- " + err);
        throw err;
    }
}
export default connectDB;