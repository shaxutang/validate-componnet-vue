import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ValidateComponent from "validate-component-vue";

createApp(App).use(ValidateComponent).mount("#app");
