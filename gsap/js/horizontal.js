const section = gsap.utils.toArray('.fullpage');
// console.log(section.length)

gsap.to(section, {
    xPercent: -100 * (section.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: "#pinContainer",
        pin: true,
        scrub: 3,
        snap: 1 / (section.length - 1),
        end: function () {
            "+=" +
            document.querySelector("#pinContainer").offsetWidth
        }
    }
});