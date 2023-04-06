import { Document } from "mongoose";

interface Idisciple extends Document {
  name: string;
  uID: string;
  phone: number;
  deployments: {}[];
  feedbacks: {}[];
}

export default Idisciple;
