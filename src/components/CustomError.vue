<template>
  <ErrorMessage :name="props.name" class="mt-2 block font-bold text-red-600" />
</template>

<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
