<template>
  <div>
    <!-- 
    <h1>{{ count }}</h1>
    <button v-on:click="addNumber(1)">증가</button>
    <button v-on:click="minusNumber">감소</button>
    <button v-on:mouseover="addNumber(10)">마우스 오버 10 증가</button> 
    -->
    <h2>{{ message }}</h2>
    <!-- 
    <button @click="greeting">인사하기</button>
    <button @click="sayGoodbye">작별하기</button>
    <div class="box" @click="getMousePosition"></div> 
    -->
    <!-- 
      이벤트 객체도 동시에 받기 위해서는 $event라고 패러미터에 명시해 주어야한다.
     -->
    <button @click="addNumber($event, 10)">10더하기</button>
    <button @click="addNumber($event, 100)">100더하기</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      message: '',
    };
  },
  methods: {
    greeting() {
      this.message = '안녕하세요';
    },
    sayGoodbye() {
      this.message = '바이';
    },
    addNumber(e, value) {
      this.message = `마우스 좌표 ${e.pageX}와 더하기 ${value}는 ${
        e.pageX + value
      }입니다.`;
    },
    minusNumber() {
      this.count = this.count - 1;
    },
    getMousePosition(e) {
      this.message = `마우스의 위치는 ${e.pageX}, ${e.pageY}`;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  font-size: 24px;
}

.box {
  width: 300px;
  height: 300px;
  background: salmon;
}
</style>
