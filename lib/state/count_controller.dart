import 'package:get/get.dart';

class CountController extends GetxController {
  int count = 0;
  void increase() {
    count++;
    // provider의 changeNotifylistener()와 같은 역할을 한다.
    // GetX는 보다 간결하게 update()라고 씀
    update();
  }
}
