// var Yoimiya = {
//     q : '유금 운간초',
//     e : '염초 정화의 춤'
// }

// var Ayaka = {
//     q : '멸망의 서리',
//     e : '얼음꽃'
// }

// class는 object를 뽑는 기계일뿐.

function skill(원소폭발, 원소스킬){
    //this는 함수 skill로부터 생성되는 object 혹은 instance
    this.q = 원소폭발, 
    this.e = 원소스킬
}

var Yoimiya = new skill('유금 운간초', '염초 정화의 춤');
// log 결과 - skill {q: '유금 운간초', e: '염초 정화의 춤'}

var Ayaka = new skill('멸망의 서리', '얼음꽃');
// log 결과 - skill {q: '멸망의 서리', e: '얼음꽃'}



//ES6 Class 문법으론 이렇게 쓴다.

class skill2{
    constructor(원소폭발, 원소스킬){
        this.q = 원소폭발, 
        this.e = 원소스킬
    }
}

var Yoimiya = new skill2('유금 운간초', '염초 정화의 춤');
// log 결과 - skill2 {q: '유금 운간초', e: '염초 정화의 춤'}

var Ayaka = new skill2('멸망의 서리', '얼음꽃');
// log 결과 - skill {q: '멸망의 서리', e: '얼음꽃'}