/* 
    [스크롤 트리거]

    scrollTrigger:'선택자'
    - 특정 요소 지정시 스크롤이 선택자 위치에 도착하면 애니메이션 작동

    sctollTrigger:{옵션}
    - trigger:'선택자' => 트리거를 작동할 선택자
    - toggleActions: 옵션1 옵션2 옵션3 옵션4
    => 4가지 옵션을 설장할 수 있다. 스크롤이 트리거 요소를 지나가버릴때 애니메이션 작동 여부를 설정할 수 있다.
    ● restart: 트리거 영역을 벗어났다가 스크롤 다시 내려올시 애니메이션 재시작
    ● pause: 트리거 영역 벗어날시 애니메이션 일시정지
    ● reverse: 트리거 영역 벗어나고 스크롤 다시 올라올시 반대로 재생
    ● none: 옵션 없음
*/

gsap.to('.b', {
    scrollTrigger:{
        trigger: '.b',
        toggleActions: 'restart pause reverse pause'
    },
    duration: 2,
    backgroundColor:'#ccc'
});