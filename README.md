# validate-component-vue

a vue form validate component library

## install

```bash
npm install validate-component-vue@latest
```

## How to use

```typescript
import { createApp } from "vue";
import ValidateComponent from "validate-component-vue";
import App from "./App.vue";

createApp(App).use(ValidateComponent).mount("#app");
```

```vue
<script lang="ts" setup>
import { reactive, ref } from "vue";

const formRef = ref();

const model = reactive({
  name: "",
  sex: "",
});

const rules = {
  name: [
    {
      required: true,
      message: "name not be empty",
    },
  ],
  sex: [
    {
      required: true,
      message: "sex not be empty",
    },
  ],
};

function validate() {
  formRef.value
    .validate()
    .then((res) => {
      // success handle
      console.log(res);
    })
    .catch((res) => {
      // error handle
      console.log("error", res);
    });
}
</script>

<template>
  <validate-form ref="formRef" :model="model" :rules="rules">
    <validate-form-item name="name" component="div" class="form-item">
      <template #default="{ validate }">
        <input type="text" v-model="model.name" />
        <span v-if="validate.hasError">{{ validate.errors[0].message }}</span>
      </template>
    </validate-form-item>
    <validate-form-item name="sex" component="div" class="form-item">
      <template #default="{ validate }">
        <input type="text" v-model="model.sex" />
        <span v-if="validate.hasError">{{ validate.errors[0].message }}</span>
      </template>
    </validate-form-item>
  </validate-form>
  <button @click="validate">validate</button>
</template>
```

rule options see [async-validator](https://github.com/yiminghe/async-validator)
