let one = 1;

// 기존 방식
// console.log(one + "+" + one + "= 2입니다.");

// 백틱을 이용해 더욱 쉽게 변수를 문자열로 표시 가능, 띄어쓰기도 쉽다.
// console.log(`${one} + ${one} = 2입니다.`);

// console.log(`${one + one} = 2랑 같다.`);

window.onload = function () {

    // 문자로 넣기
    document.querySelector("body").innerText = `백틱 ${one}\n`;


    // 수치 계산
    document.querySelector("body").innerText += `백틱 계산 ${one + one}`;
};