import { userTasks,addTask,deleteTask } from "../controllers/taskControllers.js";
import express from 'express';
const router = express.Router();
router.get("/",userTasks);
router.post("/",addTask);
router.delete("/:id",deleteTask);
export default router;