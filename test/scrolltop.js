// code arranged by ZONNY117

// last update - 2022.03.17



window.onload = function () {

    // console.log("로드 완료")


    window.addEventListener('scroll', function () {
        let sct = window.scrollY;
        let height = window.innerHeight;
        let innerh = sct + height;
        let top = document.querySelector(".vh1").offsetTop;
        let bottom = document.querySelector(".vh1").clientHeight;



        /* 
            [특정 요소 내 스크롤 값 1~100 구간 만들기]

            스크롤 구간의 시작점과 끝을 지정해야한다. 
            시작점은 window.scrollY를 이용해 실시간으로 값을 받아와야하며, 
            (익스플로러 지원안함, pageYOffset 등을 이용해 크로스 브라우징)
            보이는 화면 기준 밑바닥에서부터 스크롤의 값이 0부터 시작해야하기 때문에
            window.scrollY 와 window.innerHeight 값을 더하면 스크롤의 시작점은
            보이는 화면 하단이 된다. 

            그리고 스크롤 구간이 시작될 특정 요소의 top 값을 뺀다.
            즉, 스크롤 기준점으 수치는 특정 요소가 위치한 top 값 만큼 빠져 음수가 되고
            음수는 특정 요소의 top을 만날때 양수로 전환된다. 

            결과적으로 기준점으로 잡았던 스크롤 하단이 특정요소를 만나고 특정 요소가 화면에 보이는 시점부터 
            스크롤 값은 0부터 시작한다. 그리고 스크롤이 100이 되는 구간을 되는 도착점을 
            특정 요소의 하단 즉, 높이값으로 설정하고 나눈다.

            이때 계산된 소수점에 100을 곱하고 Math.floor를 통해 소수점 이하를 버린다.
            0 ~ 100구간이 형성된다.

            계산식 : Math.floor((스크롤 기준점 - 특정요소 top 값) / 특정요소 height값 * 100);

            결과값으로 나오는 0과 100 이외의 수치는 if문으로 제어하면 된다.
        */




        // console.log(innerh - top)


        // console.log(innerh)

        if (innerh >= top) {
            let ga = Math.floor((innerh - top) / bottom * 100);

            if (ga >= 100) {
                ga = 100
            }
            // console.log(ga)



        }




        // console.log(sct + "스크롤")
    });



};