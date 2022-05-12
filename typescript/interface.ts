/*
인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.
인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.
인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다.
ES6는 인터페이스를 지원하지 않지만 TypeScript는 인터페이스를 지원한다.

인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
단, 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용하지 않는다.
*/

// 인터페이스 정의
interface info {
    이름: string;
    원소스킬: string;
    원소폭발: string;
    레벨: number;
}


// 변수 타입으로 정의된 인터페이스 선언
let Yomi: info;

/*
인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다. 
이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다. 
함수에 객체를 전달할 때 복잡한 매개변수 체크가
필요없어서 매우 유용하다.
*/
Yomi = {
    이름: '요이미야',
    원소스킬: '염초 정화의 춤',
    원소폭발: '유금 운간초',
    레벨: 90
};
// log 결과 - {이름: '요이미야', 원소스킬: '염초 정화의 춤', 원소폭발: '유금 운간초', 레벨: 90}

// arrInfo는 인터페이스 info를 배열로 담을 수 있도록 지정했다.
let arrInfo: info[] = [];

//push 함수의 패러미터 arrplus 타입을 인터페이스 info로 지정.
function push(arrplus: info) {

    // 변수 arrInfo는 매개변수 arrplus를 받아 배열을 새로 생성. 
    arrInfo = [...arrInfo, arrplus];
}

// 변수 newInfo에 데이터 입력
const newInfo: info = {
    이름: '아야카',
    원소스킬: '얼음꽃',
    원소폭발: '멸망의 서리',
    레벨: 90
}

// push 함수 호출, 패러미터는 newInfo, arrInfo에는 newInfo가 추가된 배열 생성.
push(newInfo);

// console.log(arrInfo);
// log결과 - [{이름: '아야카', 원소스킬: '얼음꽃', 원소폭발: '멸망의 서리', 레벨: 90}];


/* 
    함수 인터페이스

    패러미터와 리턴의 타입을 정의할 수 있다.
*/

// 함수 인터페이스 정의, 패러미터는 숫자, 리턴값은 문자열 혹은 정의되지않음(undefined도 보내는 리턴값일 경우 명시를 해줘야한다.)
interface namecode {
    (code: number): string | undefined
}

// 변수 mynameis에 인터페이스 namecode 정의 
let mynameis: namecode = function (이름코드: number) {
    if (이름코드 === 1) {
        return '아야카'
    } else if (이름코드 === 2) {
        return '요이미야'
    }
};


// console.log(mynameis(1));
// log 결과 - '아야카'


/* 
    클래스 인터페이스

    클래스 선언문 implements 뒤에 인터페이스를 지정할 수 있다.
    프로퍼티 및 메서드는 가질 수 있지만, 인스턴스 생성은 불가능하다.
*/


interface bas {
    nick: string;
    age: number;
    job: string;
}

// ryongok 클래스는 bas 인터페이스대로 지정되어야함
class ryongok implements bas {

    constructor(
        public nick: string,
        public age: number,
        public job: string,
    ) {}

}

let 김룡옥 = new ryongok('룡바', 31, '에어컨 설치기사');
// log 결과 - ryongok {nick: '룡바', age: 31, job: '에어컨 설치기사'}


/* 
    인터페이스는 프로퍼티뿐만 아니라 메소드도 포함할 수 있다. 
    단, 모든 메소드는 추상 메소드이어야 한다. 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
*/

interface comment {
    job: string;
    sohard(): void;
}

class hard implements comment {
    constructor(
        public job: string
    ) {}

    sohard() {
        console.log(this.job + " 일은 너무 짜증난다.");
    }
}

function ishard(짜증나니: comment): void {
    짜증나니.sohard();
}

let work = new hard('에어컨 설치기사');

ishard(work);



/* 
    인터페이스 상속

    인터페이스는 extends 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.
*/

interface yashiro {
    master: string;
    sibling: string;
}

// yashiro 인터페이스에 상속
interface worker extends yashiro {
    employee: string;
}

// employee가 추가된다.
let 야시로봉행: worker = {
    master: "카미사토 아야토",
    sibling: "카미사토 아야카",
    employee: "토마"
}

// 복수의 인터페이스를 상속받을 수도 있다.

interface ninja {
    jongmal: string[];
}

//worker, ninja 인터페이스에 상속
interface realYashiro extends worker, ninja {}


// worker의 객체와 ninja의 객체가 합쳐졌다.
let 진짜야시로봉행: realYashiro = {
    master: "카미사토 아야토",
    sibling: "카미사토 아야카",
    employee: "토마",
    jongmal: ['사유', '기타등등']
}

/* 
    인터페이스는 인터페이스 뿐만 아니라 클래스도 상속받을 수 있다. 
    단, 클래스의 모든 멤버(public, protected, private)가 상속되지만 구현까지 상속하지는 않는다.
*/

// 클래스 선언
class bbasoony {
    constructor(
        public org: string,
        public idol: string
    ) {}
}


// 클래스에 인터페이스 상속
interface whom extends bbasoony {
    name: string;
}

// 클래스에 추가된 name 객체
let 라이덴빠순이: whom = {
    org: '텐료 봉행',
    idol: '라이덴 쇼군',
    name: '쿠죠 사라'
}