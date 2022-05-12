/*
    타입 스크립트는 엄격하게 스크립트를 탐색하기 때문에,
    요소가 담긴 변수가 null 값이 올 수도 있다고 판단한다.
    (tsconfig - "strictNullChecks": true 설정)

    따라서 변수의 타입 범위를 좁혀주어야하는데, 이를 narrowing 이라고 한다.

    밑은 제목이라는 변수의 타입을 narrowing하는 과정이다.
    변수 제목이 null 값이 아닐때 코드를 실행하도록 한 것.
    
*/
let 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
/*
    narrowing 방법에는 5가지가 있다.
*/
// instanceof 방식
// 가장 많이 사용하는 방법
if (제목 instanceof Element) {
    제목.innerHTML = '인스턴스오브';
}
// as 방식
// 변수의 데이터 타입이 무엇이 오든 지정한 타입으로 취급한다.
// css의 important처럼 남발하면 아주 좋지않은 방식이 된다.
// 정말 확실할때만 사용.
// let 제목 = document.querySelector('#title') as Element;
//optional chaining 방식
// 변수에 해당 메서드가 있으면 출력, 없으면 undefined를 출력한다.
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '옵셔널체이닝';
}
;
//   "strictNullChecks": true 옵션 삭제 방식
// null 값을 걸러내지 않는 방법이지만, 엄격한 탐색 과정이 필요해서 사용하는
// 타입스크립트상 추천되지 않는 방법이다.
