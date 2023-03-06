<script lang="ts" setup>
import type { Rule, ValidateError } from "async-validator";
import { computed, markRaw, provide, ref } from "vue";
import { ValidateFunc } from "../../types";
import {
  FormProvidePropsName,
  FormRegisterValidateFunc,
} from "../../utils/constant";

export type Props = {
  model?: Record<string, any>;
  rules?: Record<string, Rule>;
};

const props = defineProps<Props>();

const validatorFuncs = ref<ValidateFunc[]>([]);

provide(FormProvidePropsName, computed(() => props).value);

provide(FormRegisterValidateFunc, (func: ValidateFunc) => {
  validatorFuncs.value = [...validatorFuncs.value, func];
});

async function validate() {
  return new Promise((resolve, reject) => {
    Promise.all(
      validatorFuncs.value.map((validatorFunc) => validatorFunc())
    ).then((validateResults) => {
      let errors: ValidateError[] = [];
      validateResults
        .filter((validateResult) => validateResult.hasError)
        .forEach((validateResult) => {
          errors = [...errors, ...validateResult.errors];
        });
      return errors.length > 0 ? reject(errors) : resolve(props.model);
    });
  });
}

defineExpose({
  validate,
});
</script>

<template>
  <form v-bind="$attrs">
    <slot></slot>
  </form>
</template>
