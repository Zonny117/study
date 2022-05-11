/* 
    [타입스크립트]
    자바스크립트와 기본적인 문법은 비슷하지만 타입을 지정해 코드를 엄격한 통제하에 코드를 작성할 수 있다.
    스크립트 코드줄이 기하급수적으로 많을 경우에 활용가치가 높으면, 타입 지정을 통해 오류를 빠르게 발견할 수 있다.

    자바스크립트는 기본적으로 다이나믹 타이핑을 지원한다.
    1 + 1 처럼 숫자끼리 연산처리를 하면 당연히 2가 나오는데,
    1 + "1" 처럼 숫자와 문자열로 연산처리를 해도 2가 나온다.

    타입스크립트 문법 정리 
    https://www.youtube.com/watch?v=xkpcNolC270

    [ts → js 컴파일 방법] 
    터미널에서 tsc -w 입력, 종료하지 않는 한 ts파일 저장할 때마다 자동으로 컴파일
    

    [tsconfig.json]
    {
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
     }
    }
    
    target - ECMAscript 버전 설정
*/

//문자열 타입 지정
let who : string = 'zonny';

//배열 타입 지정
// 배열인데 어떤 타입의 데이터가 배열에 들어올 수 있는지 지정할 수 있다.
// 밑은 문자열만 들어올 수 있는 배열 변수 선언 예시
let array : string[] = ['zonny', '117'];


// 객체 타입 지정
// 객체 또한 해당하는 key에 대응하는 값의 데이터 타입을 지정할 수 있다.
// 동일한 key를 입력하고, value에 데이터 타입을 지정한다.
// 아래는 name이라는 key의 값은 문자열만 올 수 있다고 지정한 예시
let obj : {name : string} = {name:'zonny'};

// 객체는 key값에 ?를 넣으면 해당하는 key 값이 객체에 없거나 있을 수 있다는 표시다.
// obj 객체는 name이 무조건 있어야 하지만, obj2 객체는 name이 없어도 오류가 나지 않는다.
let obj2 : {name? : string} = {};


/* 
    [union type]
    다양한 타입을 지정해야될 경우 '|' 기호를 사용할 수 있다.

*/

// 문자열 혹은 숫자가 올 수 있다.
let union : string | number = 'zonny';



//타입 자체를 변수로 지정할 수도 있다. 
type Union = string[] | number; //타입 변수 선언

let union2 : Union = ['zonny'];


/* 
    [함수 타입 지정]

    함수는 패러미터와 리턴값의 데이터 타입을 지정할 수 있다.

    예)  function 함수명 (패터미터 : 데이터타입) : 리턴값 데이터타입 {실행 코드};
*/

function Iam(number : number) : number {
    return number + 3
};

/* 
    [array의 tuple 타입]

    배열안에 여러개의 데이터 타입을 순서를 지정할 수 있다.
*/

// 배열 첫번째에는 무조건 숫자, 두번째 블리언 값이 있어야하는 tuple타입이다.
type array_Tuple = [number, boolean];

let arr_tuple : array_Tuple = [123,true];

/* 
    [객체의 여러가지 타입]

    객체안에 지정할 타입수가 많을 경우, 한꺼번에 타입을 지정할 수 있다.
*/

type obj_multi = {
    // 문자 타입의 key에 올 수 있는 값은 문자열
    [key :string] : string,
}

let obj_muti : obj_multi = { name : 'zonny'};


/* 
    [클래스 타입 지정]

    패러미터에 데이터 타입을 지정할 수 있다.
    클래스는 미리 변수를 만들어서 탑이 지정을 해야한다.
*/

class zonny117 {
    // 변수를 미리 설정해야한다.
    name : string;
    constructor(name :string){
        this.name = name;
    }
}