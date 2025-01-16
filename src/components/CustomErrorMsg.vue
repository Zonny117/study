<template>
  <!-- * v-slot으로 부모 컴포넌트로부터 데이터를 전달받아야만 렌더링시 undefined 오류가 발생하지 않는다.-->
  <ErrorMessage :name="errorName" v-slot="{ message }">
    <span v-if="message" class="mt-2 block text-sm font-bold text-red-600">{{
      message
    }}</span>
  </ErrorMessage>
</template>

<script setup>
import { ErrorMessage } from "vee-validate";

defineProps({ errorName: { type: String, required: true } });
</script>

<style lang="scss" scoped></style>
