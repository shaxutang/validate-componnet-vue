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
      message: "名称必填",
    },
    {
      type: "email",
      message: "名称格式为邮箱",
    },
  ],
  sex: [
    {
      required: true,
      message: "性别必填",
    },
  ],
};

function validate() {
  formRef.value
    .validate()
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
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
