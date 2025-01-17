<template>
  <main class="h-screen bg-slate-700">
    <!-- * [] 안에 &는 자기 자신을 가리킴, [&_li]는 자신을 기준으로 자식요소 중 li를 선택함, 상황에 따라 아이디/클래스명 전부 가능 (scss의 문법과 비슷함) -->
    <ul class="px-5 py-5 [&_li]:text-white">
      <li>
        <RouterLink :to="{ name: 'apiTest' }">API 테스트</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'dashboard' }">대쉬보드</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'vee' }">Vee</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'pinia' }">pinia</RouterLink>
      </li>
      <li>
        <button type="button" @click="testError">에러 테스트</button>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";

const testError = () => {
  throw new Error("안녕");
};
</script>

<style lang="scss" scoped></style>
