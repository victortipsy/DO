import mongoose from "mongoose";
import environmentVariables from "./environmentVariables";

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(environmentVariables.LOCAL_URL);
    console.log(`database running on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConfig;
