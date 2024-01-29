<!-- 
  vue는 template, script, style 총 3가지의 태그로 구성된다.
  template는 문서를 구성하는 요소들을 출력,
  나머지는 스크립트, 스타일.

  vue2에서는 template 태그안에는 하나의 최상위 태그만 존재해야했지만,
  vue3부터는 여러개의 태그가 들어가도 작동한다.

  (react의 컴포넌트가 하나의 jsx요소를 리턴하는 것과 같은 이치.)
 -->

<template>
  <div>
    <h1>hello {{ animal }}</h1>
    <h2>{{ food }}</h2>
    <input type="text" v-model="food" />
    <!-- 
      태그안에 v-속성을 디렉티브라고 한다.
      v-html은 문자열 데이터 안에 태그를 인식해 html 요소로 반환하는 기능을 한다.
      반드시 안전한 코드를 사용해야한다. 악성 스크립트가 심어질 수 있기 때문.
     -->
    <div v-html="alertMessge"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      animal: 'Monkey',
      food: 'apple',
      alertMessge: '<h2>경고</h2>',
    };
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

input {
  font-size: 20px;
}
</style>
