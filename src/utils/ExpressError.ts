export default class ExpressError extends Error {
  statusCode: number;

  constructor(statusCode = 500, message = "Something went wrong") {
    super(message);
    this.statusCode = statusCode;

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, ExpressError.prototype);
  }
}
