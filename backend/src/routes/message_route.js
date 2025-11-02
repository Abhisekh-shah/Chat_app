import express from "express"
import { protectRoute } from "../middleware/auth_middleware.js";
import {getUsersForSidebar,getMessage,sendMessage} from "../controllers/message_controller.js"
const router = express.Router();

router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router;
