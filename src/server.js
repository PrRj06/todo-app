import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is live on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to start server", err);
        process.exit(1);
    }
};

startServer();
