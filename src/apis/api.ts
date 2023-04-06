import { Router } from "express";
import {
  agentActionRouter,
  agentAuthRouter,
  homeRouter,
  userActionRouter,
  userAuthRouter,
} from "../routes";
const router = Router();

router
  .use("/", homeRouter)
  .use("/user-auth", userAuthRouter)
  .use("/user", userActionRouter)
  .use("/agent-auth", agentAuthRouter)
  .use("/agent", agentActionRouter);

export default router;
