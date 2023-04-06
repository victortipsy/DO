import dotenv from "dotenv";
dotenv.config();

const environmentVariables = {
  PORT: process.env.PORT!,
  LOCAL_URL: process.env.LOCAL_URL!,
};

export default environmentVariables;
