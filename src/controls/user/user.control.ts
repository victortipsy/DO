import { Request, Response, NextFunction } from "express";
import { appError, asyncHandler } from "../../utils";
import { Iuser } from "../../shapes";
import { agentModel, requestModel, userModel } from "../../models";
import { HTTPCODE } from "../../constants";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

export const registerUser = asyncHandler(
  async (req: Request<{}, {}, Iuser>, res: Response, next: NextFunction) => {
    const { username, LGA, address, phone, password, confirmPassword } =
      req.body;
    const user = await userModel.create({
      username,
      name: "",
      email: "",
      role: "user",
      LGA,
      address,
      phone,
      password,
      confirmPassword,
    });
    // const salt = await bcrypt.genSalt(12);
    // user.password = await bcrypt.hash(user.password, salt);
    // user.confirmPassword = user.password;
    if (!user)
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "User wasn't registered",
        })
      );
    return res.status(HTTPCODE.CREATED).json({
      message: "success",
      data: user,
    });
  }
);

export const loginUser = asyncHandler(
  async (req: Request<{}, {}, Iuser>, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      if (!username)
        next(
          new appError({
            httpCode: HTTPCODE.BAD_REQUEST,
            message: "please input your username",
          })
        );
      const user = await userModel.findOne({
        username,
        password,
      });
      if (!user)
        next(
          new appError({
            httpCode: HTTPCODE.NOT_FOUND,
            message: "failed to log in",
          })
        );
      return res.status(HTTPCODE.CREATED).json({
        message: "success",
        data: user,
      });
    } catch (error) {
      return res.status(HTTPCODE.BAD_REQUEST).json({
        message: "request failed",
        data: error,
      });
    }
  }
);

export const openRequest = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let arr: any[] = [];
      const agents = await agentModel.find();
      let allgents = arr.push(agents);
      const user = await userModel.findById(req.params.userID);
      const name = user?.username;
      const address = user?.address;
      const message = `${name} at ${address} has requested for waste disposal`;
      const selectedAgents = arr
        .filter((obj) => obj.LGA === user?.LGA)
        .map((el) => el.requests);
      const open = await requestModel.create({
        name,
        address,
        message,
      });
      selectedAgents.push(new mongoose.Types.ObjectId(open._id));
      open.save();
      if (!user)
        next(
          new appError({
            httpCode: HTTPCODE.NOT_FOUND,
            message: "failed",
          })
        );
      return res.status(HTTPCODE.CREATED).json({
        message: "success",
        data: user,
      });
    } catch (error) {
      return res.status(HTTPCODE.BAD_REQUEST).json({
        message: "request failed",
        data: error,
      });
    }
  }
);
