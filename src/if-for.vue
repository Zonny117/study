<template>
  <div>
    <h2>당신의 나이는 {{ age }}입니다.</h2>
    <!-- 
      v-if와 v-else등의 조건 디렉티브가 연결될려면 반드시 태그가 연속으로 붙어있어야한다.
      중간에 조건 디렉티브 없는 태그가 들어올 수 없다.
     -->
    <h3 v-if="age > 18">당신은 어른입니다.</h3>
    <h3 v-else-if="age > 13 && age <= 18">당신은 청소년입니다.</h3>
    <h3 v-else>당신은 어린이입니다.</h3>
  </div>
  <hr />
  <div>
    <!-- 
      v-if와 v-show의 차이점은 태그 자체가 렌더링이 되느냐이다.
      v-if는 조건이 거짓이면 아예 태그가 문서상에서 사라진다.
      반면에 v-show는 문서상에 존재한다.
      렌더링이 오래 걸릴 것 같은 컴포넌트는 v-show를 통해 미리 렌더링을 해놓는 방법이 있다.
     -->
    <h2 v-if="display">보입니다!</h2>
    <h2 v-show="display">보입니다!</h2>
  </div>
  <div>
    <!-- 
      [반복문]
      v-for를 통해 데이터 개수만큼 반복해서 태그 생성.
      :key 교유의 값이 필요하다. (react의 map 함수에서 key 값이 필요한 것과 같은 이치.)
      v-for의 첫번째 인자로 item, 두번째 인자로 index를 받는다.
     -->
    <ul>
      <li :key="index" v-for="(user, index) in users">
        이름은 {{ user.name }}이고 직업은 {{ user.job }}, 성별은
        {{ user.gender }}
        <p :key="skill" v-for="skill in user.skill">{{ skill }}</p>
      </li>
    </ul>
    <!-- 
      h2태그를 조건에 맞는 개수만큼만 생성하고 싶은데,
      v-for와 v-if 동시에 사용할 수 없다.
      그렇다고 h2 자식 태그에 v-if를 넣어도, h2 태그에 v-for가 존재하기 때문에
      문서상에 렌더링이 된다.

      이런 경우에는 template태그를 하나 생성해 v-for를 선언하고,
      h2 태그에 v-if를 선언하면, 조건에 맞는 개수만 생성을 할 수 있다.
      template 태그는 아무런 의미를 가지고 있지 않은 fragment 태그이다.
     -->
    <template :key="index" v-for="(animal, index) in animals">
      <h2 v-if="animal !== 'monkey'">{{ animal }} 키값은 {{ index }}</h2>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      age: 30,
      display: false,
      animals: ['monkey', 'rat', 'dog', 'lion', 'monkey'],
      users: [
        {
          name: 'zonny',
          job: 'developer',
          gender: 'male',
          skill: ['react', 'flutter', 'nextjs'],
        },
        {
          name: 'yoon',
          job: 'chef',
          gender: 'male',
          skill: ['curry', 'rice', 'pasta'],
        },
        {
          name: 'ryong',
          job: 'air duct engineer',
          gender: 'male',
          skill: ['install', 'pipe', 'remove'],
        },
      ],
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
