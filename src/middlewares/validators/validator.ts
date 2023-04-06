import { NextFunction } from "express";
import Joi from "joi";
import { appError } from "../../utils";
import { HTTPCODE } from "../../constants";

export const validator = (
  schemaName: Joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  try {
    value.error
      ? next(
          new appError({
            httpCode: HTTPCODE.UNPROCESSIBLE_IDENTITY,
            message: value.error.details[0].message,
          })
        )
      : next();
  } catch (error: any) {
    next(
      new appError({
        httpCode: HTTPCODE.BAD_REQUEST,
        message: error,
      })
    );
  }
};
