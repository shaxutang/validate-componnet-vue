<script lang="ts" setup>
import Schema, { Rule } from "async-validator";
import { inject, toRaw, reactive } from "vue";
import { ValidateResult } from "../../types";
import { FormProvidePropsName } from "../../utils/constant";
import { registerValidateFunc } from "../../utils/register-validateFunc";
import type { Props as FormProps } from "../ValidateForm/index.vue";

const props = defineProps<{
  name: string;
  component?: string;
  rules?: Rule;
}>();

const formProps = inject<FormProps>(FormProvidePropsName);

const validateResult = reactive<ValidateResult>({
  hasError: false,
  errors: [],
});

const finalRules: Rule = formProps?.rules
  ? formProps?.rules[props.name]
  : [] || props.rules;

const validator = new Schema({ [props.name]: finalRules });

async function validate() {
  return await validator
    .validate(formProps?.model!)
    .then(() => {
      validateResult.hasError = false;
      validateResult.errors = [];
      return toRaw(validateResult);
    })
    .catch(({ errors }) => {
      validateResult.hasError = true;
      validateResult.errors = errors;
      return toRaw(validateResult);
    });
}

registerValidateFunc(validate);

defineExpose({
  validate,
});
</script>

<template>
  <component :is="component" v-bind="$attrs" v-if="component">
    <slot :validate="validateResult"></slot>
  </component>
  <slot :validate="validateResult" v-bind="$attrs" v-else></slot>
</template>
