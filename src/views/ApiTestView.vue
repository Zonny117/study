<template>
  <div class="flex h-screen flex-col">
    <SiteNavgitaion />
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
      <form class="w-[469px]">
        <div class="input-box">
          <input type="text" id="username" name="username" placeholder="ID" />
        </div>
        <div class="input-box">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
          />
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
      </form>
    </div>
  </div>
</template>

<script setup>
import SiteNavgitaion from "@/components/SiteNavgitaion.vue";

// fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "emilys",
//     password: "emilyspass",
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);
</script>

<style lang="scss"></style>
