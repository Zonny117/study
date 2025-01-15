<template>
  <Teleport to="body">
    <!--
      * 트랜지션은 vue 빌트인 컴포넌트로써 v-show 및 v-if의 조건부 출력 여부에 맞춰서 작동한다.
      * 또한 트랜지션이 동작하는 동안 클래스가 붙는다. 참고 : https://ko.vuejs.org/guide/built-ins/transition
    -->
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="p-4 bg-white self-start mt-32 max-w-screen-md"
          >
            <!-- * 슬롯 태그는 부모 컴포넌트로 부터 내용물을 전달 받을 수 있다. (리액트 children과 같은 역할) -->
            <slot></slot>
            <!-- * 부모 컴포넌트에서 모달 토글 값을 컨트롤하고 있는데, 해당 값을 닫기 버튼으로도 조작하기 위해 emit으로 전달 -->
            <button
              class="text-white mt-8 bg-weather-primary py-2 px-6"
              @click="$emit('close-modal')"
            >
              close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// * props 정의 구간
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

// * 자식 컴포넌트에서 부모 컴포넌트에게 전달하는 값 정의
defineEmits(["close-modal"]);
</script>

<!-- * scoped 속성은 해당 컴포넌트에서만 적용되는 스타일 시트를 정의한다. -->
<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
