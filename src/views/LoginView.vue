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

      <form @submit="onSubmit" class="w-[469px]">
        <InputBox field-name="userName" place-holder="ID" />
        <CustomError name="userName" />
        <InputBox
          field-name="password"
          place-holder="비밀번호"
          :icon="true"
          :input-type="isVisible ? 'text' : 'password'"
          @toggle-password="togglePassword"
        />
        <CustomError name="password" />
        <div class="group mt-3 flex cursor-pointer items-center gap-2">
          <Field
            id="autoLogin"
            name="autoLogin"
            type="checkbox"
            class="group-hover:cursor-pointer"
            :value="true"
            :unchecked-value="false"
          />
          <label
            for="autoLogin"
            class="text-[#585858] group-hover:cursor-pointer"
            >아이디 저장</label
          >
        </div>
        <button type="button" class="btn-secondary mt-8">OTP 발송</button>
        <button type="submit" class="btn-primary mt-3.5">로그인</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomError from '@/components/CustomError.vue';
import InputBox from '@/components/InputBox.vue';
import { toTypedSchema } from '@vee-validate/yup';
import { Field, useForm } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object().shape({
      userName: yup.string().required('아이디를 입력하세요.'),
      password: yup.string().required('비밀번호를 입력하세요.'),
      autoLogin: yup.boolean(),
    })
  ),
});

const isVisible = ref(false);

const togglePassword = () => {
  isVisible.value = !isVisible.value;
};

const onSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<style scoped></style>
