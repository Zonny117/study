<template>
  <div>
    <div class="flex h-screen w-screen">
      <!-- 사이드바 -->
      <div
        :style="{ width: fold ? '400px' : '0px' }"
        class="h-full overflow-hidden whitespace-nowrap bg-gray-200 text-white transition-[width]"
      >
        <div class="flex h-[50px] items-center bg-gray-900">
          <div class="px-[20px]">
            <h3 class="text-xl font-bold">Admin Dashboard</h3>
          </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800">
          <div class="flex flex-col space-y-[10px]">
            <RouterLink
              to="/"
              class="box-border block h-10 text-center leading-10 transition-colors duration-150 hover:bg-slate-400 hover:text-gray-700"
              >홈</RouterLink
            >
            <RouterLink
              to="apiTest"
              class="box-border block h-10 text-center leading-10 transition-colors duration-150 hover:bg-slate-400 hover:text-gray-700"
              >ApiTest</RouterLink
            >
            <RouterLink
              to="vee"
              class="box-border block h-10 text-center leading-10 transition-colors duration-150 hover:bg-slate-400 hover:text-gray-700"
              >vee</RouterLink
            >
          </div>
        </div>
      </div>

      <!-- 메인 대시보드 -->
      <div class="h-full w-full bg-gray-400">
        <div class="h-[50px] bg-gray-900">
          <button
            class="box-border h-full cursor-pointer px-5 text-white transition-colors hover:bg-slate-400"
            @click="foldMenu"
          >
            접기
          </button>
        </div>

        <div class="h-[calc(100vh-50px)] bg-white"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const fold = ref(true);

const foldMenu = () => {
  fold.value = !fold.value;
};
</script>

<style lang="scss" scoped></style>
