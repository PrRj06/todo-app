import express from "express";
import { getLoggedUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.get("/me",isAuthenticated,getLoggedUser);
export default router;