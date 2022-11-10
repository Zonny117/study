const images = document.querySelectorAll(".img");
const imgbx = document.querySelector(".imgbx");
const popup = document.querySelector('.popup');



images.forEach(function (item) {
    item.addEventListener('click', function () {

        gsap.set(item, {
            clearProps: true,
        });

        const state = Flip.getState(item);

        (item.parentNode === imgbx ? popup : imgbx).prepend(item);

        Flip.from(state, {
            duration: 2,
            scale: true,
            ease: 'slow.out',
        });

        gsap.to('.popup', {
            visibility: 'visible'
        });
    });
})