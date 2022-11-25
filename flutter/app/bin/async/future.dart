import 'dart:ffi';

void main() {
  // Future 미래에 받아올 값
  Future<String> name = Future.value('하이팩토리');
  Future<int> number = Future.value(1);
  Future<bool> isTrue = Future.value(true);

  addNumbers(1, 1);
  // 비동기 프로그래밍 - cpu 쓰레드는 작업을 처리하는 가장 작은 단위.
  // 쓰레드가 작업 하나를 진행하는 동안, 멈추지 않고 다른 작업도 진행하는 것이 방식이다.
  // 따라서 Future.delayed를 기다리는 동안 아래 함수도 실행되고 있는 것을 확인할 수 있다.
  addNumbers(2, 2);
}

void addNumbers(int number1, int number2) {
  print('계산시작');

  // Future.delayed(Duration(지연시간), 지연시간뒤 실행할 함수);
  Future.delayed(Duration(seconds: 2), () {
    print('계산 완료 : $number1 + $number2 = ${number1 + number2}');
  });

  print('함수완료');
}
