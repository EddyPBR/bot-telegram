import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (error) =>
    error ? console.log(error.message) : console.log("DATABASE CONNECTED")
);

mongoose.set("useCreateIndex", true);

export default mongoose;
