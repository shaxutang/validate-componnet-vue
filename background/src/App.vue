<script lang="ts" setup>
import { reactive, ref } from "vue";
import VInput from "./VInput.vue";

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
      console.log(res);
    })
    .catch((res) => {
      console.log("error", res);
    });
}
</script>

<template>
  <validate-form
    ref="formRef"
    :model="model"
    :rules="rules"
    @submit.prevent
    class="space-y-4"
  >
    <validate-form-item name="name" component="div" class="form-item">
      <template #default="{ validate }">
        <label for="">name:</label>
        <v-input
          type="text"
          v-model:value="model.name"
          placeholder="please enter your name"
        />
        <div
          v-if="validate.hasError"
          class="text-sm"
          :class="{
            'text-red': validate.hasError,
          }"
        >
          {{ validate.errors[0].message }}
        </div>
      </template>
    </validate-form-item>
    <validate-form-item name="sex" component="div" class="form-item">
      <template #default="{ validate }">
        <label for="">sex:</label>
        <v-input
          type="text"
          v-model:value="model.sex"
          placeholder="please enter your sex"
        />
        <div
          v-if="validate.hasError"
          class="text-sm"
          :class="{
            'text-red': validate.hasError,
          }"
        >
          {{ validate.errors[0].message }}
        </div>
      </template>
    </validate-form-item>
    <button @click="validate">validate</button>
  </validate-form>
  <pre class="bg-gray-100 p10 b-rd-2">{{ JSON.stringify(model, null, 2) }}</pre>
</template>
