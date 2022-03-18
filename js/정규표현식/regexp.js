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

1. RegExp.exec()
   = exec는 찾고자 하는 정보가 있다면 배열로 리턴, 찾고자 하는 정보가 없다면 null을 리턴한다.
   

2. RegExp.test()
    = test는 찾는 정보의 존재 유무에 따라 블리언 값으로 리턴한다.
*/



pattern.exec('abcde');
// console.log(pattern.exec('abcde'));
// console.log(new RegExp('a').exec('abcde')) = 정규표현식 메소드는 이런 방식으로도 사용할 수 있다.
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




/* 
    [문자열 메소드 실행]

    1. string.match()

    = exec와 유사한 기능을 수행한다. 문자열 내에 일치한 정보가 있다면 배열 리턴, 없으면 null 값을 리턴한다.

    2. string.replace(첫번째 인자, 두번째 인자)

    = 문자열 내 첫번째 인자로 받은 패턴과 일치한 문자를 두번째 인자로 받은 패턴으로 교체한다.


*/

var str = 'abcdef';

str.match(pattern);

// console.log(str.match(pattern))
// 결과값 ['a']

str.replace(pattern, 'A');
// console.log(str.replace(pattern, 'A'));
// 결과값 Abcdef



/* 
    [캐럿(^)]
    ^뒤에 오는 문자열로 시작하는 텍스트를 찾는다.

    [달러($)]
    캐럿과는 반대로 문자열 뒤에 붙는다. $ 기호는 해당 문자열로 끝나는 텍스트를 찾는다.

    [역슬래시(\)]

    \는 정규표현식에서 문자열로 취급하는 명령어다. (escape 기법이라 한다.)
*/


/^zonny117/.test('zonny117 is zonny');

// console.log(/^zonny117/.test('zonny117 is zonny'));
// 결과값 true, 문자열이 zonny117로 시작하기 때문이다.


/zonny117$/.test('zonny117 is zonny');

// console.log(/zonny117$/.test('zonny117 is zonny'));
// 결과값 false, 문자열이 zonny117이 아닌 zonny로 끝나기 때문이다.


/^$zonny117/.test('$zonny117 is zonny');
// $zonny117로 시작하는 문자열이 있는지 찾는 정규표현식을 짜려고 한다. 
// 캐럿을 넣고 그 뒤에 $zonny117을 넣었지만 이 문법은 null값을 리턴한다.
// 이유는 캐럿 뒤에 오는 달러 기호가 문자열이 아닌 기호로 인식되기 때문이다.

/^\$zonny117/.test('$zonny117 is zonny');
// 따라서 기호가 두개가 온다면 역슬래시를 이용해 달러를 escape를 시켜주고 
// 해당 달러 기호는 문자열로 취급하게 명령하면, $zonny117로 시작하는 문자열을 찾는다.


// console.log(/^\$zonny117/.test('$zonny117 is zonny'));
// 결과값 true


/* 
    [모든 문자를 찾는 기호 닷(.)]
    닷은 대상 문자열 내 문자, 특수문자, 공백 할거 없이 모든 문자열을 포함해 찾는다. 
    닷의 개수에 따라 문자열 내 문자 개수가 출력된다.
*/

/..../.test('zonny117 is zonny');

// console.log(/..../.exec('zonny117 is zonny'))
// 결과값 [zonn] 문자열에서 4개(닷의 개수)의 문자만 출력된다.