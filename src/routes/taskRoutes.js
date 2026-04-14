import { userTasks,addTask,deleteTask, updateTask} from "../controllers/taskControllers.js";
import express from 'express';
const router = express.Router();
router.get("/",userTasks);
router.post("/",addTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);
export default router;