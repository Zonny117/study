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


//prototype은 유전자라고 이해하면 쉽다.

//아래는 부모인 skill 유전자에 name을 추가한 것이다.
skill.prototype.name = "요이미야";

var Yoimiya = new skill('유금 운간초', '염초 정화의 춤');

Yoimiya.name;
//log 결과 - '요이미야'
// skill 함수에 직접 추가하지 않았음에도 name의 값의 출력되는 것을 볼 수 있다.

/* 
    자바스크립트는 객체에 존재하지 않는 key를 찾을 때 prototype을 탐색하는 과정을 거친다.
    따라서, skill에 없는 name 객체를 skill의 prototype에 추가된 name 객체에서 찾는 것.
*/

