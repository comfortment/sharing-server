export class IncorrectEnvError extends Error {
  constructor(message: string = "incorrect env") {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
