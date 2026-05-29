import { userTasks,addTask,deleteTask, updateTask} from "../controllers/taskControllers.js";
import express from 'express';
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.get("/",isAuthenticated,userTasks);
router.post("/",isAuthenticated,addTask);
router.delete("/:id",isAuthenticated,deleteTask);
router.put("/:id",isAuthenticated,updateTask);
export default router;