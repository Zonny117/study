<template>
  <SiteNavgitaion />
  <div class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="도시를 검색하기"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
      />
    </div>
  </div>
</template>
<script setup>
import SiteNavgitaion from "@/components/SiteNavgitaion.vue";
import { ref } from "vue";

const searchQuery = ref("");
</script>
<style lang="scss"></style>
