import { Request, Response, NextFunction } from "express";
import { appError } from "../../utils";
import { HTTPCODE } from "../../constants";

const devError = (err: appError, res: Response) => {
  return res.status(HTTPCODE.INTERNAL_SERVER_ERROR).json({
    error: err,
    status: err.httpCode,
    message: err.message,
    stack: err.stack,
  });
};

const errorHandler = (
  err: appError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devError(err, res);
};

export default errorHandler;
