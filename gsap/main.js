/* 
    [gsap 기본]

    gsap 선언
    애니메이션 시작 - to(선택자, {옵션});
    - 선택자에는 객체, 배열, 변수 등 다양하게 넣을 수 있다.
    - 옵션 duration, delay, x, y 등 설정을 넣을 수 있다.

*/
gsap.to(".svg", {
    duration: 2,
    x: 300
});