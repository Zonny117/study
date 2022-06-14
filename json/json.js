const yoimiya = {
    name: '요이미야',
    skill: '염초 정화의 춤',
    burst: '운금 윤간초',
};

const ayaka = ['아야카', '얼음꽃', '카미사토류 멸망의 서리'];

/* 
    [JSON]
    Javascript Object Notation

    JSON은 서로 다른 언어상에서 객체 혹은 배열등의 데이터를 서로 원활하게
    전달할 수 있게 해주는 중요한 기능을 한다.

    JSON에는 2가지 중요한 메소드가 있는데, 다음과 같다.

    stringify() = 인자를 문자열로 변환한다.
    parse() = 인자를 객체로 해석한다.

    JSON이 전달할 수 있는 데이터 타입은 객체, 배열이며, 각 객체와 배열의 값은 문자열, 숫자, 객체, 배열, 불리언, null이다.
    undefined, NaN 등은 전달할 수 없다.
*/



// 객체를 문자열로 변환
const objStr = JSON.stringify(yoimiya);
// 문자열을 객체로 해석
const obj = JSON.parse(objStr);

// 배열을 문자열로 변환
const arrStr = JSON.stringify(ayaka);
// 문자열을 배열로 해석
const arr = JSON.parse(arrStr);