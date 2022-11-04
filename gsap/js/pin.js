// 기본설정 메서드
gsap.defaults({
    duration: 2,
    ease: 'none'
})



const tl = gsap.timeline();



tl.from('.b', {
    xPercent: 100
}).from('.c', {
    xPercent: -100
}).from('.d', {
    yPercent: 200
}).from('.e', {
    yPercent: -100
});

// 스크롤 트리거 새 인스턴스 생성
ScrollTrigger.create({
    animation: tl,
    trigger: '#pinContainer',
    start: 'top top',
    /* 끝 지점을 상대 수치로 늘려 스크롤 영역을 넓힐 수 있다. */
    end: '+=5000',
    scrub: 2,
    pin: true,
    markers: true,
})