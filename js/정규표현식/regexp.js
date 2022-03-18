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

//////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
    [캐럿(^)]
    ^뒤에 오는 문자열로 시작하는 텍스트를 찾는다. 
    대괄호 안에 쓰는 캐럿은 not의 의미를 갖는다.

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


////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
    [모든 문자를 찾는 기호 닷(.)]
    닷은 대상 문자열 내 문자, 특수문자, 공백 할거 없이 모든 문자열을 포함해 찾는다. 
    닷의 개수에 따라 문자열 내 문자 개수가 출력된다.
*/

/..../.test('zonny117 is zonny');

// console.log(/..../.exec('zonny117 is zonny'))
// 결과값 [zonn] 문자열에서 4개(닷의 개수)의 문자만 출력된다.


/\......\./.exec('zonny is ... me.');
// zonny is ... me. 라는 문자열에서 ... me. 를 출력해 보겠다.
// ... me. 는 총 7개의 문자로 이루어진 문자열이다. (공백 포함).
// 시작 닷과 끝나는 닷을 제외하면 5개의 문자만 찾아오면 된다.
// 첫 닷과 끝 닷은 역슬래시로 문자라 취급하고 
// 역슬래시 사이에 5개의 닷 기호를 추가하면
// ... me. 가 출력된다.

// console.log(/\......\./.exec('zonny is ... me.'))
// 결과값 [... me.]

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
    [대괄호([])]

    []는 대괄호 안에 있는 문자를 가지고 있는 문자열을 출력한다.
    대괄호 기호는 1개의 문자로 취급된다. 
    즉, [abc]는 1개의 문자 [abc][def]는 2개의 문자다.
    
    [범위 설정 Range]

    대시(-) 기호는 찾고자 하는 문자 범위를 지정해준다. 대괄호와 함께 쓴다. 대소문자를 구별한다.

    ex) 소문자 a에서 g까지 찾기 
    [a-g]

    ex) 대문자 a에서 g까지 찾기
    [A-G]

    ex) 숫자 1~9 찾기
    [1-9]


    대문자 A~G, 소문자 a~f, 숫자 1에서 5에 해당하는 문자열 찾기
    [A-Ga-f1-5]


    [캐럿(^)]

    대괄호 안에 쓰는 캐럿은 다른 not의 의미를 갖는다.
    찾는 문자열에서 설정한 문자열을 제외한 나머지를 찾게 한다.
    대소문자를 구분한다.

    ex) 소문자 a에서 g 제외
    [^a-g]
*/


/[zon]/.exec('zonny117 is zonny');
// console.log(/[zon]/.exec('zonny117 is zonny'));
// 결과값 [z] 문자 1개 출력


/[zon][zon]/.exec('zonny117 is zonny');
console.log(/[zon][zon]/.exec('zonny117 is zonny'));
// 결과값 [zo] 문자 2개 출력

// console.log(/[o~y1~9].../.exec('zonny117 is zonny'));