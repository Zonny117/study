<template>
  <div>
    <h1>Watchers</h1>
    <h2>current money :: {{ money }}</h2>
    <div>
      <button @click="money += 100">earn money</button>
      <button @click="money -= 100">spend money</button>
    </div>
    <h3>{{ receit }}</h3>
    <button @click="receit.food += 500">buy food</button>
    <hr />
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: 'zonny',
      money: 0,
      receit: {
        food: 3000,
        fee: 2000,
        fare: 10000,
      },
    };
  },
  // 변화를 감지하는 속성
  watch: {
    /* 
      기본적으로 와치는 데이터 변수명과 같은 이름으로 메소드를 작성하는 방식이다.
      또한 해당 메소드에는 두개의 패러미터가 존재하며, 변화된 값, 이전 값을 갖는다.
    */
    money(newValue, oldValue) {
      if (newValue > 2000 && newValue > oldValue) {
        // console.log('미션 컴플리트');
      }
      if (oldValue < 1500 && newValue < oldValue) {
        // console.log('돈아껴');
      }
    },
    /* 
      만약 데이터 변수가 객체인 경우, 와치도 객체로 작성해야하며,
      handler라고 메소드를 작성한다.
      또한, deep 속성을 true로 설정해야 감지할 수 있다.
    */
    receit: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
    /* 
      와치의 특정 속성을 이용하고 싶을때도, 객체로 작성한다.
      아래는 immediate라는 속성을 사용하기 위해, handler로 메소드를 만들고
      해당 속성을 선언했다.
    */
    username: {
      handler(newValue) {
        console.log(newValue);
      },
      // 최초 렌더링시 바로 작동하는 속성
      immediate: true,
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
</style>
