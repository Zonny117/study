const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
});

const slides = gsap.utils.toArray('.swiper-slide'),
    popup = document.querySelector(".popup"),
    popupImg = document.querySelector(".popup img"),
    popupTxt = document.querySelector(".popup p"),
    btn_close = document.querySelector(".btn_close");


gsap.set(popupTxt, {
    yPercent: 100,
});

slides.forEach(function (item) {
    item.addEventListener('click', function () {
        const item_img = item.querySelector('img').src;
        const item_txt = item.querySelector('p').innerText;

        popupImg.addEventListener('load', imgLoad)
        popupImg.src = item_img;
        popupTxt.innerText = item_txt;


        function imgLoad() {
            Flip.fit(popup, item, {
                scale: true,
                fitChild: popupImg,
            });
            const state = Flip.getState(popup);

            gsap.set(popup, {
                clearProps: true,
            });

            gsap.set(popup, {
                visibility: 'visible',
            });

            Flip.from(state, {
                scale: true,
                duration: 1.5,
            }).to(popupTxt, {
                yPercent: 0,
                ease: 'power4',
                opacity: 1,
            });

            popupImg.removeEventListener('load', imgLoad);

            btn_close.addEventListener('click', function () {
                gsap.set(popup, {
                    overflow: 'hidden',
                });

                const state2 = Flip.getState(popup);

                Flip.fit(popup, item, {
                    scale: true,
                    fitChild: popupImg,
                });

                const tl = gsap.timeline();

                tl.to(popupTxt, {
                    yPercent: 100,
                    opacity: 0,
                    padding: 0,
                }).to(popup, {
                    opacity: 0,
                    onComplete: () => {
                        gsap.set(popup, {
                            visibility: 'hidden'
                        });
                    }
                });


                Flip.from(state2, {
                    padding: 0,
                    scale: true,
                    ease: 'circ.out',
                });
            });
        };
    });
});