/* 
    [gsap 모션패스]
    svg 선을 따라서 애니메이션을 작동할 수 있다.

    motionPath 속성
    - path: svg의 path요소
    - aligh: 선택한 요소를 path 요소가 위치한 곳에 정렬한다.
    - alighOrigin: 선택한 요소의 정렬할 지점을 설정한다.
    - autoRotate: 선택한 요소가 path를 따라 자동으로 방향을 잡아 애니메이션을 작동한다.
    - start: 애니메이션 시작 지점
    - end: 애니메이션 끝 지점
*/

gsap.to('.div', {
    duration: 5,
    ease: 'circ.inOut',
    motionPath: {
        path: '.path',
        align: '.path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 0.5,
    },
});