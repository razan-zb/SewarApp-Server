// src/controllers/fashionItemController.ts
import { FashionItemService } from "../services/fashionItem.service.js";

export class FashionItemController {
static async createFashionItem(req, res) {
    const itemData = req.body;
    const newItem = await FashionItemService.createFashionItem(itemData);
    return res.status(201).send(newItem);
  }

   static async getAllFashionItems(req, res) {
    const items = await FashionItemService.getAllFashionItems();
    return res.status(200).send(items);
  }

   static async getFashionItemById(req, res) {
    const itemId = req.params.id;
    const item = await FashionItemService.getFashionItemById(itemId);
    return res.status(200).send(item);
  }

   static async updateFashionItem(req, res) {
    const itemId = req.params.id;
    const itemData = req.body;
    const updatedItem = await FashionItemService.updateFashionItem(itemId, itemData);
    return res.status(200).send(updatedItem);
  }

   static async deleteFashionItem(req, res) {
    const itemId = req.params.id;
    await FashionItemService.deleteFashionItem(itemId);
    return res.status(204).send();
  }
}
