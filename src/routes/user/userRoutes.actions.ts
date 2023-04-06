import { Router } from "express";
import {
  loginUser,
  openRequest,
  registerUser,
  removeAgents,
} from "../../controls";
const userActionRouter = Router();

userActionRouter.post("/request/:userID", openRequest);

export default userActionRouter;
