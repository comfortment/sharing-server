export class IncorrectEnvError extends Error {
  constructor(message: string = "incorrect env") {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NonExistNanumError extends Error { }

export class NonExistApartmentError extends Error { }

export class NoPermissionError extends Error { }
