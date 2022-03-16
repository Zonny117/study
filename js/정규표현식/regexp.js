// 정규표현식 리터럴

//변수 패턴 1, 2는 같은 값을 출력한다.
// '/' 혹은 new RegExp 사용
var pattern1 = /a/;
// console.log(pattern1)

var pattern2 = new RegExp('a');
// console.log(pattern2)


/////////////////////////////////


// 정규표현식 메소드 실행

//  RegExp.exec()

pattern1.exec('abcde');
// console.log(pattern1.exec('abcde'));