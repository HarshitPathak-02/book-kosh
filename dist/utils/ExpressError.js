"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpressError extends Error {
    constructor(statusCode = 500, message = "Something went wrong") {
        super(message);
        this.statusCode = statusCode;
        // Ensure proper prototype chain for instanceof checks
        Object.setPrototypeOf(this, ExpressError.prototype);
    }
}
exports.default = ExpressError;
