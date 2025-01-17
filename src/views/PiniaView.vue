<template>
  <div class="h-screen w-full bg-slate-600">
    <ul class="space-y-3">
      <li v-for="(data, index) in datas" :key="data.id">
        <span class="cursor-pointer text-white" @click="handleClick(index)">{{
          data.text
        }}</span>
      </li>
      <li>
        <p class="text-lg font-bold text-white">
          current index : {{ store.index }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useIndexStore } from "@/store/store";

const datas = [
  {
    id: 0,
    text: "홍길동",
  },
  {
    id: 1,
    text: "고길동",
  },
  {
    id: 2,
    text: "아무개",
  },
  {
    id: 3,
    text: "가나다",
  },
  {
    id: 4,
    text: "라마바",
  },
];

const store = useIndexStore();

const handleClick = (index) => {
  store.selectIndex(index);
};
</script>

<style lang="scss" scoped></style>
