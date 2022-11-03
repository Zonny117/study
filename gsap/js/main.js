/* 
    [gsap 기본]

    gsap 선언 후

    ● 애니메이션 시작 - to(선택자, {옵션});

    - 선택자에는 객체, 배열, 변수 등 다양하게 넣을 수 있다.
    - 옵션 duration, delay, x, y, css 스타일속성, 이징 등을 설정할 수 있다.
    - 기본적으로 자바스크립트 기반이기 떄문에 모든 옵션은 캐멀케이스 or 스테이크 케이스로 작성한다.
    - 또한, 해당 선택자의 인라인 방식으로 작동한다.
    
    ● 역행 애니메이션 - from 메서드로 작동
    - 설정된 옵션이 선택자의 지점으로 도달하기까지 역행으로 애니메이션이 실행된다.

    ● fromTo 메서드
    - 현재 선택자의 위치를 기준으로 from과 to를 설정

    ※ gsap에서는 몇몇 css 속성들을 줄여쓴다.
    대표적으로 transform에서 translateX를 x로만 표기한다.

    ※ 옵션 수치 단위에는 여러가지를 넣을 수 있다.
    예를 들어 x:20은 x축으로 20픽셀 우로 이동이지만,
    xPercent:20은 x축으로 20퍼센트 우로 이동이 된다.
    x:'20vw' 등 뷰포트 단위,
    x:() => window.innerWidth / 2 등 계산식으로도 가능.
*/
gsap.to(".svg", {
    duration: 2,
    x: 300,
    backgroundColor: '#f00',
    borderRadius: '50%',
    ease: 'power4'
});

gsap.from('.svg2', {
    duration: 2,
    x: 300,
    backgroundColor: '#f00',
    borderRadius: '50%',
    ease: 'power4'
})

gsap.fromTo('.svg3', {
    // from 먼저 설정
    x: -150,
    backgroundColor: 'blue',
    borderRadius: '50%'
}, {
    // to 설정
    duration: 2,
    repeat:-1,
    yoyo:true,
    x: 300,
    ease:'expo.out',
    backgroundColor: 'red',
    borderRadius: '0%'
});
/* 
    공통 클래스를 주고 stagger로 지연시간을 줄 수 있다.
    결과적으로 순차적으로 애니메이션이 실행됨.
*/
gsap.from('.circle', {
    duration: 1,
    /* 랜덤 속성 */
    y: 'random(-200, 200)',
    opacity: 0,
    ease: "bounce",
    /* 일정 간격으로 순차적으로 실행 */
    stagger: '0.5'
})

let position = {
    x: 0,
    rotation: 0,
    backgroundColor: '#fff',
};

/* 
    gsap.set()은 해당 요소를 세팅한다.
 */
gsap.set('.rect',{
    duration:4,
    x:200,
    rotation:360,
    backgroundColor:'#ff0'
})
