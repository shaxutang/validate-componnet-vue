import { createApp } from "vue";
import ValidateComponent from "validate-component-vue";
import App from "./App.vue";
import "uno.css";
import "./style.css";

createApp(App).use(ValidateComponent).mount("#app");
