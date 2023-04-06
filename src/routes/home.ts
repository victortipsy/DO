import { Router, Request, Response } from "express";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: `Welcome Home`,
  });
});

export default homeRouter;
