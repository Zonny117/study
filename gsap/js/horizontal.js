const section = gsap.utils.toArray('.fullpage');
// console.log(section.length)

gsap.to(section, {
    xPercent: -100 * (section.length - 0.5),
    ease: 'none',
    scrollTrigger: {
        trigger: "#pinContainer",
        pin: true,
        scrub: 1,
        end: function () {
            return (
                "+=" +
                document.querySelector("#pinContainer").offsetWidth / 2
            )
        }
    }
});