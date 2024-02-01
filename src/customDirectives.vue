<template>
  <div>
    <h1>Directives</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">change name</button>
    <h2 v-pre>{{ userName }}</h2>
    focus <input type="text" v-focus /> hightlight
    <input type="text" v-highlight />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userName: 'zonny',
    };
  },
  // 디렉티브는 커스텀할 수 있다.
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        el.oninput = () => {
          el.style.background = 'salmon';
          el.style.color = '#fff';
        };
      },
    },
  },
  methods: {
    changeName() {
      this.userName = 'code!';
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
