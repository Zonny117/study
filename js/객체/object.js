window.addEventListener('load', function () {
    var member = {
        "front": "프론트엔드",
        "back": 5,
        "full": 2
    }


    // console.log(member.front)

    var text = member.front

    let box = document.querySelector(".box");
    let span = document.createElement('span');

    box.prepend(span);

    document.querySelector('span').innerText = text;

});


// document.addEventListener('DOMContentLoaded', function(){
//     console.log("dom 로드");
// });

// window.onload = function(){
//     console.log("window 로드");

// };