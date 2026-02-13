import mongoose from "mongoose";
export default async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
