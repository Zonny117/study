// 배열 데이터로 변환
gsap.utils.toArray('.fullpage').forEach(function (item, index) {
    ScrollTrigger.create({
        // 트리거를 배열 내 데이터로 설정
        trigger: item,
        start: 'top top',
        end: 'bottom',
        // markers: true,
        pin: true,
        // pin 사이 공간 제거, 결과적으로 다음 섹션이 붙어서 올라온다
        pinSpacing: false,
        // 스크롤이 어중간하게 걸쳐 있을시 화면에 자연스럽게 맞춰준다
        snap: 1
    });
});