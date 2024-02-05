<!-- 
    컴포넌트의 이름은 대문자로 시작하며,
    두가지 이상의 단어로 조합해 파일명을 작성하도록 권장된다.
 -->
<template>
  <div>
    <!-- 프롭으로 받은 데이터 사용 -->
    <h2>hello {{ username }}!</h2>
    <h3>오늘이 {{ numberOfVisit }} 번째 방문</h3>
    <h3>사이트 이름은 {{ siteInfo.name }}입니다.</h3>
  </div>
</template>
<script>
export default {
  /*
    뷰파일에는 기본적으로 name 속성을 작성한다.
    디버깅 로그에 name 속성을 통해 구분이 가능하다.
  */
  name: 'GreetingUser',
  // 컴포넌트의 프롭 설정, 이름과 타입이 필요하다.
  props: {
    // 기본값 설정을 할 경우 아래와 같이 가능하다.
    username: {
      type: String,
      default: 'user!',
    },
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: 'a', teacher: 'b', subject: 'c' };
      },
    },
  },
};
</script>
<!-- scoped는 해당 뷰파일만 스타일을 적용하겠다는 의미이다. -->
<style scoped></style>
