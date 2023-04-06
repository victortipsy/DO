import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import { appError } from "./utils";
import { HTTPCODE } from "./constants";
import errorHandler from "./middlewares/errors";
import { api } from "./apis";

const appConfig = (app: Application) => {
  //add middlewares
  app
    .use(express.json())
    .use(morgan("dev"))
    .use(cors())
    .use("/server", api)
    // catch wrong routes
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new appError({
          message: `This route ${req.originalUrl} does not exist`,
          httpCode: HTTPCODE.NOT_FOUND,
        })
      );
    })
    // error handler
    .use(errorHandler);
};

export default appConfig;
