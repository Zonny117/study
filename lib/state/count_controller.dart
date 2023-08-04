import 'package:flutter/material.dart';
import 'package:get/get.dart';

// 일반적인 상태관리 방법
class CountController extends GetxController {
  int count = 0;
  void increase() {
    count++;
    // provider의 changeNotifylistener()와 같은 역할을 한다.
    // GetX는 보다 간결하게 update()라고 씀
    update();
  }
}

// 반응형 상태관리 방법
class ReactiveCountController extends GetxController {
  // 값 뒤에 obs를 붙인다. observable의 약자이며, 알아서 해당 값을 리스닝하고 있다.
  // int 타입이라 하면 에러가 나며, RxInt 타입으로 선언해야한다.
  RxInt count = 0.obs;

  // 일반적인 방법과 달리 update()를 호출하지 않아도 작동한다.
  void increse() {
    count++;
  }

  void putNumber(value) {
    // count = value가 아닌 count(value)이다.
    // 전자로 쓸 경우 타입 오류가 발생한다.
    count(value);
  }

  // 반응형을 사용할때 GetxController를 상속받아
  // 라이프사이클을 사용할 수 있다.
  @override
  void onInit() {
    // count의 값을 리스닝하고 있다가 값이 변화화면 해당 함수들을 실행한다.
    ever(count, (callback) => debugPrint("매번 호출"));
    once(count, (callback) => debugPrint("한번만 호출"));

    // debounce는 값이 변화한 뒤 마지막에 한번만 실행되는데, time 패러미터의 값을 설정하여,
    // 원하는 시점에 실행할 수도 있다.
    debounce(count, (callback) => debugPrint("마지막으로 값이 변화한 뒤 한번만 호출"),
        time: const Duration(milliseconds: 500));

    // interval은 값이 변경되는 동안 특정 시간 간격마다 반복적으로 호출이 되는데,
    // time 패러미터에 값을 설정함으로써 시간을 조절할 수 있다. (기본값은 1초)
    interval(
      count,
      (callback) => debugPrint("값이 변경되는 동안 특정 시간마다 호출"),
      time: const Duration(milliseconds: 1000),
    );

    super.onInit();
  }
}