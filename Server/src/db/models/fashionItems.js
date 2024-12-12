import mongoose from "mongoose";

const fashionItemSchema = new mongoose.Schema(
  {
    _id: {
      type: String, 
      required: false,
    },
    name: {
      type: String, 
      required: true, 
    },
    description: {
      type: String,
      required: false,
    }, 
    type: {
      type: String,  
      required: true, 
    },
    size: { 
      type: String,
      required: true,
    },
    photos: [{
      type: String,
      required: true,  
    }],
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FashionItem = mongoose.model("FashionItem", fashionItemSchema);

export default FashionItem;
  