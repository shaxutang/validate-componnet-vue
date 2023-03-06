<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
const props = defineProps<{
  value?: string;
}>();

const emits = defineEmits(["update:value"]);

const valueState = useVModel(props, "value", emits);
</script>

<template>
  <input
    type="text"
    v-model="valueState"
    class="outline-none px2 py2 text-base b-rd-2 border-none bg-none"
  />
</template>
