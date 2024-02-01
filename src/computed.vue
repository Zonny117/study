<template>
  <div>
    <h1>computed</h1>
    <h2>{{ address }}</h2>
    <h2>내가 받은 점수의 computed 합은 {{ totalScore }}</h2>
    <h2>내가 받은 점수의 methods 합은 {{ getTotalScore() }}</h2>
    학생 이름 <input type="text" v-model="studentName" /> 영어 점수
    <input type="text" v-model="grade.eng" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      studentName: '',
      scoreEng: 50,
      userName: 'zonny',
      address1: '성남시',
      address2: '분당구',
      address3: '정자로',
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
    };
  },
  // 컴퓨티드는 참조하고 있는 값이 변경이 될때만 함수가 실행된다. (리액트의 useMemo 같은 기능)
  computed: {
    address() {
      return `${this.address1} - ${this.address2} - ${this.address3}`;
    },
    totalScore() {
      console.log('컴퓨티드');
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
  // 메소드는 렌더링이 일어날때마다 호출이 된다.
  methods: {
    getTotalScore() {
      console.log('메소드');
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
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
