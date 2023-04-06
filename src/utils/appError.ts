import { HTTPCODE } from "../constants";

interface ErrorArguments {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HTTPCODE;
}

class appError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HTTPCODE;
  constructor(args: ErrorArguments) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;
    this.name = args.name || "Error";

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

export default appError;
