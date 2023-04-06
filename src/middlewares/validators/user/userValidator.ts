import { RequestHandler } from "express";
import { userSchema } from ".";
import { validator } from "../validator";

export const registerValidator: RequestHandler = (req, res, next) =>
  validator(userSchema.register, req.body, next);
export const loginValidator: RequestHandler = (req, res, next) =>
  validator(userSchema.login, req.body, next);
