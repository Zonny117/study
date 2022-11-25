import 'dart:ffi';

import '../basic/function.dart';

void main() {
  // Future 미래에 받아올 값
  Future<String> name = Future.value('하이팩토리');
  Future<int> number = Future.value(1);
  Future<bool> isTrue = Future.value(true);

  addNumbers(1, 1);
  // await을 만났다고 해서 cpu가 작업을 중단하지 않는다는 증거.
  // await을 만나면 마냥 기다리지 않고, 읽어들일만한 코드가 또 있는지 찾게 된다.
  addNumbers(2, 2);
}

// await을 사용하기 위해선 async 키워드가 무조건 선언되어야함
void addNumbers(int number1, int number2) async {
  print('계산시작 : $number1 + $number2');

  // 코드가 실행되다가 await 키워드를 만나면 해당 라인의 코드가 실행이 완료될 때까지 해당 코드 다음에 있는 놈들은 실행안됨.
  // await 키워드 코드가 실행 완료되면, 다시 정상적으로 코드를 읽기 시작함.
  await Future.delayed(Duration(seconds: 2), () {
    print('계산 완료 : $number1 + $number2 = ${number1 + number2}');
  });

  print('함수완료');
}
