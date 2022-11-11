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

        calc = (e.clientX - x) / sensitivity;

        // book.style.transform = `rotateY(${calc + prev}deg)`;

        book.style.cursor = 'grabbing';

        gsap.to(book, {
            rotateY: `${calc + prev}`,
            ease: 'elastic.out',
            duration: 2
        });
    };

    prev += calc;

    window.addEventListener('mouseup', function () {
        section.removeEventListener('mousemove', rotate);

        body.style.cursor = 'default';
    });
});


section.addEventListener('touchstart', function (e) {


    const x = e.changedTouches[0].pageX;

    section.addEventListener("touchmove", rotate);

    function rotate(e) {
        calc = (e.touches[0].pageX - x) / sensitivity;

        // book.style.transform = `rotateY(${calc + prev}deg)`;

        gsap.to(book, {
            rotateY: `${calc + prev}`,
            ease: 'elastic.out',
            duration: 2
        });
    }

    prev += calc;

    window.addEventListener('touchend', function () {
        section.removeEventListener('touchmove', rotate);
    });
});