/* 
[정규표현식 리터럴]

'/' 혹은 'new RegExp' 사용

*/

var pattern = /a/;
// console.log(pattern)
// 결과값 /a/

var pattern2 = new RegExp('a');
// console.log(pattern2)
// 결과값 /a/

//변수 패턴 1, 2는 같은 값을 출력한다.


/////////////////////////////////


/*
[정규표현식 메소드 실행]

RegExp는 객체 즉, 찾고자하는 문자를 담고있는 패턴을 말한다.
여기서는 변수 pattern들에 담겨져 있는 문자열이다. 

1. RegExp.exec()
   = exec는 찾고자 하는 정보가 있다면 배열로 리턴, 찾고자 하는 정보가 없다면 null을 리턴한다.
   

2. RegExp.test()
    = test는 찾는 정보 유무에 따라 블리언 값으로 리턴한다.
*/


pattern.exec('abcde');
// console.log(pattern.exec('abcde'));
// 결과값 ["a"]

var pattern3 = /a./;
// '.'은 문자 1개를 의미한다. 여기서는 문자 'a' 옆에 '.'을 둠으로써
// a라는 문자 옆에 1개의 문자를 같이 출력한다.

pattern3.exec('abcde');
// console.log(pattern3.exec('abcde'));
// 결과값 ["ab"]

pattern.test('abcde');
// console.log(pattern.test('abcde'));
// 결과값 true


pattern.test('bcde');
// console.log(pattern.test('bcde'));
// 결과값 false