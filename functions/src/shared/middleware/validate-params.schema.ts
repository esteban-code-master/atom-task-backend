import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function validateParams(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): any => {
    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      return res
        .status(400)
        .json({ errors: error.details.map((detail) => detail.message) });
    }
    next();
  };
}
