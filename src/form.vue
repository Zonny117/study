<template>
  <div>
    {{ user }}
    <form>
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" @input="setValue" />
      </div>
      <div>
        <label for="age">나이</label>
        <input type="text" id="age" v-model="user.age" />
      </div>
      <div>
        <label for="city">사는 곳</label>
        <!--
          data에 city 값을 따로 선언하지 않아도
          v-model을 통해 생성할 수 있다.
          하지만 가급적 선언해주는 것이 좋으며,
          어떤 타입의 데이터인지도 명시하는게 좋다(ts).
         -->
        <select id="city" v-model="user.city">
          <option value="seoul">서울</option>
          <option value="daejeon">대전</option>
          <option value="daegu">대구</option>
          <option value="busan">부산</option>
          <option value="gwangju">광주</option>
        </select>
      </div>
      <div>
        <label for="favorite-food">좋아하는 음식</label>
        <select id="favorite-food" multiple v-model="user.favorite">
          <option
            :key="food.code"
            v-for="food in foodOptions"
            :value="food.code"
          >
            {{ food.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="job">직업</label>
        프로그래머
        <input type="checkbox" value="programmer" v-model="user.job" /> 가수
        <input type="checkbox" value="singer" v-model="user.job" /> 교사
        <input type="checkbox" value="teacher" v-model="user.job" />
      </div>
      <div>
        <label for="sex">성별</label>
        <input type="radio" value="male" v-model="user.gender" />
        <input type="radio" value="female" v-model="user.gender" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      foodOptions: [
        { label: '짜장면', code: 'JJ' },
        { label: '짬뽕', code: 'JB' },
        { label: '탕수육', code: 'TS' },
      ],
      user: {
        name: '',
        age: 0,
        city: 'seoul',
        favorite: [],
        job: [],
        gender: '',
      },
    };
  },
  methods: {
    setValue(e) {
      const { value } = e.target;
      this.user.name = value;
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

label {
  margin-right: 1rem;
  vertical-align: middle;
  font-size: 22px;
  font-weight: bold;
}
div {
  margin-bottom: 1rem;
}
</style>
