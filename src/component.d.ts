import ValidateForm from "./components/ValidateForm/index.vue";
import ValidateFormItem from "./components/ValidateFormItem/index.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ValidateForm: typeof ValidateForm;
    ValidateFormItem: typeof ValidateFormItem;
  }
}
