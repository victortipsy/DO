import joi from "joi";
const userShema = {
  register: joi.object({
    username: joi.string().required(),
    LGA: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().valid(joi.ref("password")),
  }),
  login: joi.object({
    username: joi.string().required(),
    password: joi.string().min(6).required(),
  }),
};

export default userShema;
