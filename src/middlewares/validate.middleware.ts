import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

export const validate = (schema: Joi.ObjectSchema): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            res.status(400).json({
                ok: false,
                message: "Validation Error",
                details: error.details.map((d) => d.message),
            });
            return;
        }

        next();
    };
};
