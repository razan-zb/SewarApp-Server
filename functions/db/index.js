import mongoose from "mongoose";

// const connectDb = async () => {
//   mongoose.set("strictQuery", true);
//   await mongoose.connect("mongodb://localhost:27017/SewarApp");

// };

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://sewardesigns2024:VmWGpacgpNjWKMqV@cluster0.9m9yd.mongodb.net/?retryWrites=true");
};



export { connectDb };
