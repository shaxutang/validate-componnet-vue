import { App } from "vue";
import ValidateForm from "./components/ValidateForm/index.vue";
import ValidateFormItem from "./components/ValidateFormItem/index.vue";

export default {
  install(app: App) {
    app.component("validate-form", ValidateForm);
    app.component("validate-form-item", ValidateFormItem);
  },
};
