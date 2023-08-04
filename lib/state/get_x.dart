import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/state/count_controller.dart';

class WithGetX extends StatelessWidget {
  // GetX의 장점은 provider와 달리 context에 대한 제약이 없어서 어느 위치에서든 선언한 뒤 사용이 가능하다는 점이다.
  // 또한, GetBuilder에 id 값을 부여함으로써 동일한 컨트롤러로 상태관리를 따로 할 수 있다.
  final CountController _countController = Get.put(CountController());

  WithGetX({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          GetBuilder<CountController>(
            builder: (controller) => Text(
              "${controller.count}",
              style: const TextStyle(fontSize: 30),
            ),
          ),
          ElevatedButton(
            style: const ButtonStyle(
              backgroundColor: MaterialStatePropertyAll(Colors.blue),
            ),
            onPressed: () {
              // 변수로 선언했을 때 사용법
              _countController.increase();

              // provider처럼 직접 찾아서 사용하는 방법
              // Get.find<CountController>().increase();
            },
            child: const Text(
              "+",
              style: TextStyle(color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }
}
