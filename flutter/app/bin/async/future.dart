import 'dart:ffi';

void main() {
  // Future 미래에 받아올 값
  Future<String> name = Future.value('하이팩토리');
  Future<int> number = Future.value(1);
  Future<bool> isTrue = Future.value(true);

  addNumbers(1, 1);
}

void addNumbers(int number1, int number2) {
  print('계산시작');

  // Future.delayed(Duration(지연시간), 지연시간뒤 실행할 함수);
  Future.delayed(Duration(seconds: 2), () {
    print('계산 완료 : $number1 + $number2 = ${number1 + number2}');
  });

  print('함수완료');
}
