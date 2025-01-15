<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavgitaion />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavgitaion from "./components/SiteNavgitaion.vue";
</script>
<style lang="scss"></style>
