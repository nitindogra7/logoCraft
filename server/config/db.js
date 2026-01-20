import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connected 🚀");
  } catch (error) {
    console.error("error : ", error);
    process.exit(1);
  }
};

export default connectDb