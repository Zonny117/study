void main() {
  // 변수선언
  // 데이터 타입을 선언하지 않고 var를 선언하면 최초 선언시 입력된 값의 데이터 타입을 지정한다.
  // 이외 데이터 타입을 따로 선언하고 변수를 설정하면, 선언한 데이터 타입으로 지정된다.
  var name = '하이팩토리';

  print(name);

  var name2 = '요이미야';

  print(name2);


  name = '플러터 프로그래밍';

  print(name);

  //정수타입 integer
  int number1 = 10;

  print(number1);

  int number2 = 15;

  print(number2);
  
  int number3 = -20;

  print(number3);

  // 실수 double
  double number4 = 2.5;
  double number5 = 0.5;

  print(number4 + number5);

  // 불리언 bool
  bool isTrue = true;
  bool isFalse = false;

  print(isTrue);
  print(isFalse);

  // 글자타입 String 선언시 대문자 주의
  String hi = '하이';
  String hi2 = '팩토리';

  print(hi + ' ' + hi2);

  // 달러 중괄호를 이용해 변수를 바로 사용가능
  print('${hi} ${hi2}');

  // 중괄호 생략가능
  print('$hi $hi2');

  // 중괄호는 변수에 메소드를 실행하는 등 필요할때 사용
  print('${hi.runtimeType} ${hi2}');

  // runtimeType - 데이터타입을 확인한다.
  print(hi.runtimeType);


  // 다이나믹 dynamic 어떤 데이터타입도 가능.
  // var는 최초 선언시 입력된 데이터타입으로 고정되지만, 다이나믹은 변경이 가능하다는 점에 차이가 있다.
  dynamic factory = '팩토리';

  factory = 1;

  print(factory);
}
