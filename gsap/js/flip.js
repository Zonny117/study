const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
});

const slides = document.querySelectorAll(".swiper .swiper-slide");

const popup = document.querySelector(".popup");

slides.forEach(function (item) {
    item.addEventListener('click', function () {
        const img = item.children[0];

        console.log(img)

        const siblings = [...slides].filter(function (el) {
            return item !== el
        });

        gsap.to(siblings, {
            duration: 2,
            opacity: 0,
            onComplete: () => {
                gsap.set(img, {
                    height: 'auto'
                });


                Flip.fit('.swiper', '.popup', {
                    duration: 2,
                    fitChild: img,
                    ease: 'slow',
                    absolute: true,
                    onComplete: () => {
                        this.addEventListener('click', function () {
                            console.log(this)
                            Flip.killFlipsOf('.swiper', '.popup');
                        });
                    },
                });

            }
        });




    });
})