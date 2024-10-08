import Joi from "joi";

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const queryParams = Joi.object({
  email: Joi.string().email().required(),
});
