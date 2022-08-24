import Joi from "joi";

export default class Validator {
  email (email: string): void {
    const joi = Joi.string().email().required().validate(email);

    if (joi.error) { throw new Error(joi.error.message) }
  }
}