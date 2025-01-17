import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useIndexStore = defineStore("testIndex", () => {
  // * 스테이트
  const index = ref(0);

  // * getter (미리 계산된 값)
  const doubleCount = computed(() => index.value * 2);

  // * action
  const selectIndex = (idx) => {
    index.value = idx;
  };

  return { index, doubleCount, selectIndex };
});
