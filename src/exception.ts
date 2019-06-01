export class IncorrectEnvError extends Error {
  constructor(message: string = "incorrect env") {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadConditionError extends Error { }

export class NonExistNanumError extends Error { }
