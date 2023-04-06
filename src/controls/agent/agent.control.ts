import { Request, Response, NextFunction } from "express";
import { appError, asyncHandler } from "../../utils";
import { Iagent } from "../../shapes";
import { HTTPCODE } from "../../constants";
import { agentModel } from "../../models";
import { discipleModel } from "../../models";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

export const registerAgent = asyncHandler(
  async (req: Request<{}, {}, Iagent>, res: Response, next: NextFunction) => {
    const { name, LGA, phone, password, confirmPassword } = req.body;
    const agent = await agentModel.create({
      name,
      email: "",
      role: "agent",
      LGA,
      phone,
      password,
      confirmPassword,
      disciples: [],
      requests: [],
      feedbacks: [],
    });
    // const salt = await bcrypt.genSalt(12);
    // agent.password = await bcrypt.hash(agent.password, salt);
    // agent.confirmPassword = agent.password;
    if (!agent)
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "User wasn't registered",
        })
      );
    return res.status(HTTPCODE.CREATED).json({
      message: "success",
      data: agent,
    });
  }
);

export const loginAgent = asyncHandler(
  async (req: Request<{}, {}, Iagent>, res: Response, next: NextFunction) => {
    try {
      const { phone, password } = req.body;
      if (!phone)
        next(
          new appError({
            httpCode: HTTPCODE.BAD_REQUEST,
            message: "please input your username",
          })
        );
      const agent = await agentModel.findOne({
        phone,
        password,
      });
      if (!agent)
        next(
          new appError({
            httpCode: HTTPCODE.NOT_FOUND,
            message: "failed to log in",
          })
        );
      return res.status(HTTPCODE.CREATED).json({
        message: "success",
        data: agent,
      });
    } catch (error) {
      return res.status(HTTPCODE.BAD_REQUEST).json({
        message: "request failed",
        data: error,
      });
    }
  }
);

// export const grtOneAgent = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const agent = await agentModel.findById(req.params.id)
//       return res.status(HTTPCODE.CREATED).json({
//         message: "success",
//       });
//     } catch (error) {
//       return res.status(HTTPCODE.BAD_REQUEST).json({
//         message: "request failed",
//         data: error,
//       });
//     }
//   }
// );

export const registerDisciple = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const agent = await agentModel.findById(req.params.agentID);
      const { name, phone } = req.body;
      const unID = JSON.stringify(name + Math.random());
      const disciple = await discipleModel.create({
        name,
        phone,
        uID: unID,
        deployments: [],
        feedbacks: [],
      });
      agent?.disciples!.push(new mongoose.Types.ObjectId(disciple?._id));
      disciple?.save();
      return res.status(HTTPCODE.CREATED).json({
        message: "success",
        data: agent,
      });
    } catch (error) {
      return res.status(HTTPCODE.BAD_REQUEST).json({
        message: "request failed",
        data: error,
      });
    }
  }
);

export const removeAgents = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const antiAgent = await agentModel.deleteMany();
      return res.status(HTTPCODE.CREATED).json({
        message: "success",
      });
    } catch (error) {
      return res.status(HTTPCODE.BAD_REQUEST).json({
        message: "request failed",
        data: error,
      });
    }
  }
);
