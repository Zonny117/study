window.addEventListener('load', function () {

    var member = {
        "front": "프론트엔드",
        "back": "백엔드",
        "full": "풀스택",
        "obj in obj": {
            "서울": "강동구",
            "잠실": "송파구"
        }
    }



    // console.log(member["front"])

    var text = member.front;
    var text2 = member["back"];
    // text, text2 모두 key에 해당하는 value를 불러온다. 표현방식은 달라보이지만 같은 뜻이다.

    let box = document.querySelector(".box");
    let span = document.createElement('span');

    box.prepend(span);

    span.style.textAlign = "center";

    span.innerText = text + "\n";

    span.innerText += text2 + "\n";

    span.innerText += member["obj in obj"]["서울"]
    // 객체 안에 객체를 만들어서 불러올 수 있다. get방식을 이런 방법으로 활용한다.



    for (let x in member) {


        x;
        // console.log(x + " key");
        // for in 문은 객체를 자동으로 굴려준다.
        // 변수 x만 호출할 경우, 해당 객체의 key만 출력한다.

        member[x];
        // console.log(member[x] + " value");
        // 객체의 value를 출력한다.
    }

    // console.log(span)
});


// document.addEventListener('DOMContentLoaded', function(){
//     console.log("dom 로드");
// });

// window.onload = function(){
//     console.log("window 로드");

// };