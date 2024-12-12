import express from "express";
import userRoutes from "./user.routes.js";
import taskRoutes from "./task.routes.js";
import fashionItemRoutes from "./fashionItem.routes.js";
import clientRoutes from "./client.routes.js";

const router = express.Router();
router.use("/api/user/", userRoutes);
router.use("/api/task/", taskRoutes);
router.use("/api/fashionItem/", fashionItemRoutes);
router.use("/api/client/", clientRoutes);

export default router;
 