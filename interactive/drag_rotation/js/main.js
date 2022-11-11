const section = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const body = document.querySelector("body");

// 이전 회전값
let prev = 0;

// 계산
let calc = 0;


// 드래그 감도
const sensitivity = 4;

section.addEventListener('mousedown', function (e) {

    // 마우스 x 포지션
    const x = e.clientX;

    section.addEventListener('mousemove', rotate);

    function rotate(e) {
        console.log((e.clientX - x) / sensitivity);

        calc = (e.clientX - x) / sensitivity;

        book.style.transform = `rotateY(${calc + prev}deg)`;

        book.style.cursor = 'grabbing';
    };

    prev += calc;

    window.addEventListener('mouseup', function () {
        section.removeEventListener('mousemove', rotate);

        body.style.cursor = 'default';
    });
});