/* 
    [수의 연산 - Math 객체의 명령어]

    1. Math.pow(인자1, 인자2)
    
    = 인자1의 인자2만큼의 제곱을 출력하는 함수

    2. Math.round()

    = 소수점 이하 반올림하는 함수

    3. Math.ceil()

    = 소수점 올림 

    4. Math.floor()

    = 소수점 내림

    5. Math.sqrt()

    = 제곱근 출력

    6. Math.random()

    = 기본값은 소수점을 포함한 0과 1사이 난수를 출력하기 때문에 
    원하는 수치 구간을 곱하고 소수점을 버리거나 올려서 수치를 리턴할 수 있다.

    예) Math.round(100 * Math.random()) = 0에서 100 사이 난수를 소수점 이하 반올림하여 출력한다.
*/


Math.pow(3, 2);

// console.log(Math.pow(3, 2));
// 결과값 9

Math.round(10.66);

// console.log(Math.round(10.66));
// 결과값 11

Math.ceil(10.2);

// 결과값 11

Math.floor(10.6);

// 결과값 10

Math.sqrt(9);

// 결과값 3

Math.random();

// 결과값은 0에서 1 사이 난수를 출력한다. 소수점을 포함한다.