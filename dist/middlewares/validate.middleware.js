"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
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
exports.validate = validate;
