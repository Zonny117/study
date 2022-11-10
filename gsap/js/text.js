/* 
    [gsap 텍스트 플러그인]
    글자에 애니메이션을 적용할 수 있음.

    ○ 옵션
    - text => 출력할 텍스트
    - duration => 애니메이션 동작 시간
    - ease => 이징

    ○ text 속성
    - value: 출력할 텍스트
    - newClass: 출력할 텍스트에 클래스 부여, span태그로 래핑되며 생성된다.
    - oldClass: 출력전에 html 상에 이미 등록된 텍스트에 클래스 부여.

    부여된 클래스는 css에서 스타일 설정을 해놓으면 보다 더 다양한 연출을 할 수 있다.

*/
gsap.to('.txt', {
    duration: 5,
    text: {
        value: 'zonny is the best developer.',
        delimeter: "",
        newClass: 'new',
        oldClass: 'old',
    },
    ease: 'bounce'
})