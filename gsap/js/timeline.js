/* 
    [gsap 타임라인]
    여러개의 애니메이션을 차례대로 동작하게 만듬
    별도로 딜레이 설정을 주지 않아도 됨.

    ※각 애니메이션의 duration을 기준으로 차례대로 실행된다.

    ex) 만약 이전 애니메이션이 끝나고 바로 실행되지 않고 약간의 갭을 주기 위해선 아래와 같이 작성
    gasp.timeline().to(선택자,{옵션},타임라인 갭);

*/

/* 타임라인은 여러 옵션을 줄 수 있다.*/
const tl = gsap.timeline({
    /* 타임라인 반복 횟수 */
    repeat: 2,
    /* 말그대로 요요처럼 왔다 갔다한다. 애니메이션이 진행됐다가 다시 역행으로 돌아온다. */
    yoyo: true,
});

tl.to(".svg", {
    duration: 2,
    x: 300,
    backgroundColor: '#f00',
    borderRadius: '50%',
    ease: 'power4'
});

tl.from('.svg2', {
    duration: 2,
    x: 300,
    backgroundColor: '#f00',
    borderRadius: '50%',
    ease: 'power4'
})

tl.from('.circle', {
    duration: 1,
    y: 'random(-200, 200)',
    opacity: 0,
    ease: "bounce",
    stagger: '0.5'
}, '+=1' /* 이전 애니메이션 종료 후 1초뒤 실행 */ );