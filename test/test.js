window.onload = function () {
    var test = 1 + 1;

    function vartest() {

        var test1 = null;

        document.querySelector(".btn").addEventListener('click', function () {
            test1 = 2
        });

        return test1

    }


    // vartest();

    // console.log(vartest());

    // let test1 = 0;

    // document.querySelector(".btn").addEventListener('click', function () {
    //     return test1 = 3

    // });

    // document.querySelector(".btn").addEventListener('click', function () {

    //     vartest();
    //     console.log(vartest());


    // });

    // vartest();

    // console.log(vartest());

    // let btn = document.querySelector(".btn");

    // btn.addEventListener('click', function () {
    //     alert("클릭")
    // });

    // console.log(test1)
    let span = document.createElement('span');

    let a = document.querySelector(".mMod7 a").parentNode.insertBefore(span, document.querySelector(".mMod7 a"));

    // appendChild는 기존에 있던 태그를 끌어다 자식요소로 넣을 수 있다.
    span.appendChild(document.querySelector(".mMod7 a"));



    // 부모요소 만들기 

    function wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        wrapper.classList.add("swiper-slide")
    }

    let par = document.querySelectorAll(".mMod7 a");
    // console.log(par)

    let btn = document.querySelector(".btn");


    let i = 0;


    btn.addEventListener("click", function () {

        while (i < par.length) {
            wrap(par[i], document.createElement('div'));
            i = i + 1;
        }


    });

};