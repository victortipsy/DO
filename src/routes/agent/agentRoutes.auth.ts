import { Router } from "express";
import { agentLoginValidator, agentRegisterValidator } from "../../middlewares";
import { loginAgent, registerAgent } from "../../controls";

const agentAuthRouter = Router();

agentAuthRouter.post("/register", agentRegisterValidator, registerAgent);
agentAuthRouter.post("/login", agentLoginValidator, loginAgent);
export default agentAuthRouter;
