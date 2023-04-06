import { Document } from "mongoose";

interface Iuser extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  LGA: string;
  address: string;
  phone: number;
}

export default Iuser;
