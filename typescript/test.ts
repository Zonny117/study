/* 
    타입 스크립트는 엄격하게 스크립트를 탐색하기 때문에,
    요소가 담긴 변수가 null 값이 올 수도 있다고 판단한다.
    (tsconfig - "strictNullChecks": true 설정)

    따라서 변수의 타입 범위를 좁혀주어야하는데, 이를 narrowing 이라고 한다.

    밑은 제목이라는 변수의 타입을 narrowing하는 과정이다.
    변수 제목이 null 값이 아닐때 코드를 실행하도록 한 것.
    
*/

let 제목 = document.querySelector('#title');

if(제목 != null){
    제목.innerHTML = "반가워요"
}


/* 
    narrowing 방법에는 5가지가 있다.
*/

// instanceof 방식
// 가장 많이 사용하는 방법

if(제목 instanceof Element){
    제목.innerHTML = '인스턴스오브'
}


// as 방식
// 변수의 데이터 타입이 무엇이 오든 지정한 타입으로 취급한다.
// css의 important처럼 남발하면 아주 좋지않은 방식이 된다.
// 정말 확실할때만 사용.
// let 제목 = document.querySelector('#title') as Element;


//optional chaining 방식
// 변수에 해당 속성이 있으면 출력, 없으면 undefined를 출력한다.

if(제목?.innerHTML != undefined){
    제목.innerHTML = '옵셔널체이닝'
};


//   "strictNullChecks": true 옵션 삭제 방식
// null 값을 걸러내지 않는 방법이지만, 엄격한 탐색 과정이 필요해서 사용하는
// 타입스크립트상 추천되지 않는 방법이다.



/* 
    instanceof 방식 주의점
    a태그의 href를 바꾸기 위해 instanceof Element라고 지정을 해줘도 오류가 난다.
    이는 Element 속성중에 href가 없기 떄문인데, 보다 더 명확하게 지정을 해줄 필요가 있다.

    HTMLAnchorElement라고 지정해줌으로써 link는 a태그임을 명시하고 있다.
    a태그 속성중엔 당연히 href가 있기 때문에, 코드가 실행된다.

    이밖에도 button, heading 등도 지정할 수 있다.
*/

let link = document.querySelector(".link");

if(link instanceof HTMLAnchorElement){
    link.href = "https://kakao.com";
}


/* 
    이벤트 리스너

    ? 기호를 붙여 addEventListener 속성이 있는지 없는지 파악할 수 있다.
*/

let button = document.querySelector("#button");

button?.addEventListener('click', function(){
    console.log("?를 입력해도 실행된다.")
});