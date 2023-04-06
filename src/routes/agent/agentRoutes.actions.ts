import { Router } from "express";
import { registerDisciple, removeAgents } from "../../controls";

const agentActionRouter = Router();

agentActionRouter.post("/register-disciple/:agentID", registerDisciple);
agentActionRouter.post("/anti", removeAgents);

export default agentActionRouter;
