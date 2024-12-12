// src/dal/fashionItem.dal.ts
import FashionItem from "../db/models/fashionItems.js";

export class FashionItemDal {
   static async createFashionItem(itemData) {
    const newItem = new FashionItem(itemData);
    await newItem.save();
    return newItem;
  }

   static async getAllFashionItems() {
    const items = await FashionItem.find();
    return items;
  }

   static async getFashionItemById(itemId) {
    const item = await FashionItem.findById(itemId);
    return item;
  }

   static async updateFashionItem(itemId, itemData) {
    const updatedItem = await FashionItem.findByIdAndUpdate(itemId, itemData, { new: true });
    return updatedItem;
  }

   static async deleteFashionItem(itemId) {
    await FashionItem.findByIdAndDelete(itemId);
  }
}
