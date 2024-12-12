// src/routes/fashionItem.routes.ts
import { Router } from "express";
import { FashionItemController } from "../controllers/fashionItemController.js";

const router = Router();

router.post("/", FashionItemController.createFashionItem);
router.get("/", FashionItemController.getAllFashionItems);
router.get("/:id", FashionItemController.getFashionItemById);
router.put("/:id", FashionItemController.updateFashionItem);
router.delete("/:id", FashionItemController.deleteFashionItem);

export default router;
 