import { RequestHandler } from "express";
import { validator } from "../validator";
import agentShema from "./agentSchema";

export const agentRegisterValidator: RequestHandler = (req, res, next) =>
  validator(agentShema.register, req.body, next);
export const agentLoginValidator: RequestHandler = (req, res, next) =>
  validator(agentShema.login, req.body, next);
