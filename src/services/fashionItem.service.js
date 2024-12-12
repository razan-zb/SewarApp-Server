// src/services/fashionItem.service.ts
import { FashionItemDal } from "../dal/fashionItem.dal.js";

export class FashionItemService {
 static async createFashionItem(itemData) {
    const newItem = await FashionItemDal.createFashionItem(itemData);
    return newItem;
  }

   static async getAllFashionItems() {
    const items = await FashionItemDal.getAllFashionItems();
    return items;
  }

   static async getFashionItemById(itemId) {
    const item = await FashionItemDal.getFashionItemById(itemId);
    return item;
  }

   static async updateFashionItem(itemId, itemData) {
    const updatedItem = await FashionItemDal.updateFashionItem(itemId, itemData);
    return updatedItem;
  }

   static async deleteFashionItem(itemId) {
    await FashionItemDal.deleteFashionItem(itemId);
  }
}
