/* 
    [역슬래시 \]
    문자열에서 역슬래시 바로 뒤따르는 1개의 텍스트를 문자로 해석한다. = escape한 것
*/

//  예

// console.log('zonny\'s test area');

// 결과값 "zonny's test area"

/* 
    역슬래시 바로 뒤 작은 따옴표가 문자열의 끝을 의미하지 않고, 하나의 문자로 인식된다.
*/

/* 
    typeof 
    
    문자열인지 숫자인지 데이터 타입을 확인할 수 있다.

    문자열은 string

    숫자는 number
*/

typeof 1;
// 결과값 number


typeof "1";
// 결과값 string


/* 
    [문자 명령어]
    \n  : 줄바꿈
    + : 좌우 문자열 연결

    예)
        1+1 = 2
    
        "1"+"1" = "11"

    문자열을 이루는 문자 개수를 구할때 length는 공백까지 포함한다.


*/

// console.log("1".length)
//결과값 1
// console.log("1 ".length)
//결과값 2