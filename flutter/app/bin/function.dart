// void 함수의 기본값인데, void는 말그대로 공허함
// 리턴값이 없는 함수를 뜻한다.
void main() {
  int result = addNumbers(10, 30, 50);

  // 네임드 파라미터이기 때문에, 순서가 섞여도 상관없다. z는 옵셔널로 기본값이 30이지만, 인자로 40을 받아 덮어쓴 형태다.
  addNumbers2(y: 20, z: 40, x: 10);

  print(result);

  int result2 = addNumbers3(20, y: 50);

  print(result2);
}
/* 
  [패러미터 종류]
  순서가 중요한 파라미터 positional parameter
  존재 유무가 상관없는 파라미터 optional (패러미터를 대괄호로 감싸준다.)
  이름이 있는 파라미터(순서가 중요하지 않음) named parameter
 */

/* 
  아래 함수는 패러미터 y와 z가 옵셔널인 상태다
  옵셔널 패터미터들은 기본값이 필요하다. 아래는 y의 20, z 30이 기본값이다.
  기본값이 없으면 null값이 되는데, 정수 타입은 null 값을 가져올수 없으며, ?를 선언한다해도
  sum 변수에서 null 값을 더할수가 없기 때문에 오류가 난다.
  따라서 정수 타입의 기본값을 선언함으로써 옵셔널을 설정할 수 있다.
  기본값은 인자가 덮어쓸수 있다. 
*/

// 함수 앞 데이터 타입을 선언하고, 해당 타입의 값을 리턴해야한다.
// 데이터타입이 없다면, 기본값은 void 즉, 리턴값이 없는 함수가 된다.
int addNumbers(int x, [int y = 20, int z = 30]) {
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }

  return sum;
}

/* 
  아래 함수는 네임드 파라미터이다.
  네임드는 중괄호로 감싸고,
  required는 필수로 들어가야하는 패러미터 값을 의미하고
  required가 없다면 옵셔널 패러미터가 된다.
 */

// 리턴값이 없는 함수 void addNumber2()와 같다.
addNumbers2({
  required x,
  required y,
  int z = 30,
}) {
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }
}

/* 
 화살표 함수
  함수()=>리턴값;
 리턴값을 축약해서 표시할 수 있다.
 */

// x는 앞에 무조건 있어야되는 포지셔널, y는 순서가 중요하지 않은 네임드, z는 없어도 되는 옵셔널
int addNumbers3(int x, {required int y, int z = 20}) => x + y + z;
