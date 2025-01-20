<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#ECEFF4]">
    <div
      class="flex h-[807px] w-[708px] flex-col items-center justify-center rounded-[30px] bg-white"
    >
      <img
        class="mb-2.5 inline-block h-[39px] w-[44.2px]"
        src="../assets/images/logo.svg"
        alt="kt"
      />
      <h1 class="mb-4 text-[40px] font-bold tracking-tighter">
        모바일 보안카드 발급 시스템
      </h1>
      <p class="mb-[54px] text-lg">안내문구가 들어가는 영역입니다.</p>
      <Form class="w-[469px]">
        <InputBox field-name="userName" place-holder="ID" />
        <InputBox
          field-name="password"
          place-holder="비밀번호"
          :icon="true"
          :input-type="isVisible ? 'text' : 'password'"
          @toggle-password="togglePassword"
        />
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputBox from '@/components/InputBox.vue';
import { Form } from 'vee-validate';
import { ref } from 'vue';

const isVisible = ref(false);

const togglePassword = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped></style>
