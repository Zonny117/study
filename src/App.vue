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
    <!-- 
      v-bind:에 속성을 연결해 데이터를 활용할 수 있다.
      v-bind는 생략 가능
     -->
    <a :href="food">{{ food }}</a>
    <hr />
    <!-- 
      동적 클래스 적용
     -->
    <h2 :class="{ red: food === 'apple', 'not-good': food === 'rice' }">
      원숭이는 {{ food }}를 좋아합니다.
    </h2>
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
      imageSource:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      naverUrl: 'https://www.naver.com',
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

.orange {
  color: orange;
}

.salmon {
  color: salmon;
}

.red {
  color: red;
}

.not-good {
  text-decoration: line-through;
}
</style>
