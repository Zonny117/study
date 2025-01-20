<template>
  <div class="space relative mt-[13px] w-full first:mt-0">
    <Field
      :id="props.fieldName"
      :name="props.fieldName"
      :type="props.inputType"
      :placeholder="props.placeHolder"
      class="box-border h-14 w-full rounded-md border border-[#BEBEBE] px-5 leading-[3.5rem] outline-none"
    />
    <button
      v-if="props.icon"
      type="button"
      class="absolute right-5 top-2/4 inline-block h-[16px] w-[21px] -translate-y-2/4 bg-[url('../assets/images/ico_visible.svg')] bg-center bg-no-repeat"
      :title="
        props.inputType === 'password' ? '비밀번호 보이기' : '비밀번호 숨기기'
      "
      :aria-label="
        props.inputType === 'password' ? '비밀번호 보이기' : '비밀번호 숨기기'
      "
      @click="emit('togglePassword')"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

interface Props {
  fieldName: string;
  placeHolder: string;
  icon?: boolean;
  inputType?: 'text' | 'password';
}

interface Emits {
  (event: 'togglePassword'): void;
}

const props = withDefaults(defineProps<Props>(), {
  icon: false,
  inputType: 'text',
});

const emit = defineEmits<Emits>();
</script>

<style scoped></style>
