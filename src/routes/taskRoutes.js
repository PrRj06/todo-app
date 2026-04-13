import { userTasks,addTask } from "../controllers/taskControllers.js";
import express from 'express';
const router = express.Router();
router.get("/",userTasks);
router.post("/",addTask);
export default router;