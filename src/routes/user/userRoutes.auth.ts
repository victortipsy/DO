import { Router } from "express";
import { loginUser, registerUser } from "../../controls";
import { registerValidator, loginValidator } from "../../middlewares";
const userAuthRouter = Router();

userAuthRouter.post("/register", registerValidator, registerUser);
userAuthRouter.post("/login", loginValidator, loginUser);
export default userAuthRouter;
