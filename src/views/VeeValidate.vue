<template>
  <div class="flex h-screen flex-col">
    <div
      class="flex h-screen w-full flex-1 flex-col items-center justify-center"
    >
      <div class="mb-4 h-[39px] w-[44.2px]">
        <img src="/src/assets/images/kt-logo.png" alt="KT" class="w-full" />
      </div>
      <div class="mb-[54px] text-center">
        <p class="mb-4 text-[40px] font-medium">모바일 보안카드 발급 시스템</p>
        <p class="text-lg font-normal">안내문구가 들어가는 영역입니다.</p>
      </div>
      <Form class="w-[469px]" :validation-schema="schema" @submit="onSubmit">
        <div class="input-box">
          <Field name="username" type="text" placeholder="ID" />
          <ErrorMessage name="username" />
        </div>
        <div class="input-box">
          <Field name="password" type="password" placeholder="패스워드" />
          <ErrorMessage name="password" />
        </div>
        <div class="mt-3.5">
          <input id="save" name="save" type="checkbox" />
          <label for="save" class="ml-2">아이디 저장</label>
        </div>

        <button
          type="button"
          class="mt-10 box-border block h-[56px] w-full rounded-md border border-[#454545] text-xl"
          onclick=""
        >
          OTP 발송
        </button>
        <button
          class="mt-3 block h-[56px] w-full rounded-md bg-[#ed1c24] text-xl text-white"
          type="submit"
        >
          로그인
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("아이디를 입력하세요."),
  password: yup.string().required("비밀번호를 입력하세요."),
});
//     username: "emilys",
//     password: "emilyspass",

const onSubmit = async (values) => {
  try {
    const res = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: values.username,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss"></style>
