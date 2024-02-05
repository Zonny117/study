<template>
  <div>
    <!-- username 프롭전달 -->
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
    <button @click="changeName">이름 변경</button>
  </div>
</template>

<script>
import GreetingUser from './components/GreetingUser.vue';

export default {
  name: 'App',
  data() {
    return {
      username: 'zonny',
      numberOfVisit: undefined,
      siteInfo: {
        name: 'vue practice',
        teacher: 'asd',
        subject: 'frontend',
      },
    };
  },
  /* 
    컴포넌트를 사용하기 위해서는 임포트를 우선적이로 시행.
    그리고 components 속성의 키,값을 넣어준다.
    GreetingUser : GreetingUser
    그런데 es6에서는 키와 값이 동일하면 하나로 표현이 가능하다.
  */
  components: {
    GreetingUser,
  },
  methods: {
    changeName() {
      this.username = 'good';
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
