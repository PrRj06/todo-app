import app from "../backend/app.js";
import connectDB from "../backend/config/db.js";

await connectDB();

export default app;
