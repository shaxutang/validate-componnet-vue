import { ValidateError } from "async-validator";

export type ValidateResult = {
  hasError: boolean;
  errors: ValidateError[];
};

export type ValidateFunc = () => Promise<ValidateResult>;
