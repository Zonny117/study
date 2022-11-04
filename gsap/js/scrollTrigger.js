/* 
    [스크롤 트리거]

    scrollTrigger:'선택자'
    - 특정 요소 지정시 스크롤이 선택자 위치에 도착하면 애니메이션 작동

    sctollTrigger:{옵션}
    - trigger:'선택자' => 해당 선택자를 기준으로 트리거를 작동한다.

    - endTrigger:'선택자' => 해당 선택자 위치를 기준으로 트리거를 중지한다.

    - toggleActions: 
    => 옵션1(트리거 영역 위에서부터 들어올시) 옵션2(트리거 영역 위에서부터 완전히 벗어날시) 옵션3(트리거 영역 아래에서부터 들어올때) 옵션4(트리거 영역 아래서부터 완전히 벗어날때)

    => 옵션은 아래와 같다.

    ● play: 재생, 기본값
    ● restart: 트리거 영역을 벗어났다가 스크롤 다시 내려올시 애니메이션 재시작
    ● pause: 트리거 영역 벗어날시 애니메이션 일시정지
    ● resume: 애니메이션 멈춘 시점부터 재생
    ● reverse: 애니메이션 반대로 재생
    ● reset: 애니메이션 리셋
    ● complete: 애니메이션 종료
    ● none: 옵션 없음

    - start: 옵션1 옵션2 => 트리거 애니메이션이 작동할 시작 지점

    ● 옵션1 => 트리거가 설정된 선택자의 기준점, 이 기준점이 뷰포트의 기준점에 닿을 경우 트리거가 작동한다.
    ● 옵션2 => 트리거를 작동시킬 뷰포트 기준점, 옵션1에서 설정한 선택자의 기준점이 뷰포트 기준점에 닿으면 트리거 작동.

    ※ 위 옵션들은 px, %, 상대단위 등 사용이 가능하다.

    - end: 옵션1 옵션2 => 트리거 애니메이션이 종료될 시점

    ● 옵션1 => 트리거가 설정된 선택자의 기준점, 이 기준점이 뷰포트의 기준점에 닿을 경우 트리거가 중지된다..
    ● 옵션2 => 트리거를 작동시킬 뷰포트 기준점, 옵션1에서 설정한 선택자의 기준점이 뷰포트 기준점에 닿으면 트리거 중지.

    ※ 위 옵션들은 px, %, 상대단위 등 사용이 가능하다.
    
    - markers: boolean => 스크롤 트리거 작동 지점을 확인 할 수 있다. 개발시 유용함.

    - scrub: 
    => 트리거가 설정된 영역을 지날때 스크롤 움직임에 맞춰서 애니메이션이 실행된다. 기본값은 false이며 true시 linear한 움직임을 보이며,
    수치를 입력할 경우 높을수록 더욱 스무스하게 움직인다.
        
    - pin:
    => 스크롤시 해당 요소를 고정 시킨다. start와 end 지점을 이용해 고정 영역을 조정할 수 있다. 값을 true로 둘 경우 트리거로 설정된 요소를 따라가며,
    별도로 특정 요소를 고정시킬 수도 있다.
*/

// 토글액션
gsap.to('.b .rect', {
    scrollTrigger: {
        trigger: '.b',
        // 위아래 방향 영역 벗어날때 일시정지, 스크롤 아래방향 재시작, 위방향 반대로 재생
        toggleActions: 'restart pause reverse pause',
        // 시작 지점 : 트리거 요소의 top, 뷰포트의 top 
        start: 'top top',
        // 끝 지짐 : 트리거 요소의 bottom, 뷰표트의 top
        end: 'bottom top',
        // 마커표시
        // markers: true,
    },
    duration: 2,
    x: 300,
});

// 스크럽
gsap.to('.c .rect', {
    scrollTrigger: {
        trigger: '.c .rect',
        // 스크럽 스무스 강도 2
        scrub: 2,
        start: 'top bottom',
        end: 'bottom top',
        // markers: true,
    },
    duration: 2,
    x: 600,
    rotation: 360,
});

// 타임라인을 이용한 스크럽
const scrubTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.d',
        // 스크럽 true
        scrub: true,
        pin: '.d .rect',
        start: '20% top',
        end: '80% center',
        markers: true,
    }
});

scrubTl.to('.d .rect', {
    x: 600,
    rotation: 360,
    backgroundColor: '#ff0'
});
scrubTl.to('.d .rect', {
    x: 300,
    rotation: 150,
});
scrubTl.to('.d .rect', {
    x: 0,
    rotation: 0,
    backgroundColor: '#f00'
});