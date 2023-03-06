import { inject } from "vue";
import { ValidateFunc } from "../types";
import { FormRegisterValidateFunc } from "./constant";

export function registerValidateFunc(func: ValidateFunc) {
  const register = inject<(func: ValidateFunc) => void>(
    FormRegisterValidateFunc
  );
  register && register(func);
}
