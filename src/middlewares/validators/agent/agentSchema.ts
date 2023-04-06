import joi from "joi";
const agentShema = {
  register: joi.object({
    name: joi.string().required(),
    LGA: joi.string().required(),
    phone: joi.number().required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().valid(joi.ref("password")),
  }),
  login: joi.object({
    phone: joi.string().required(),
    password: joi.string().min(6).required(),
  }),
};

export default agentShema;
