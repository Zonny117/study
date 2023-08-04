import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/state/count_controller.dart';

class WithGetX extends StatelessWidget {
  final CountController countController = Get.put(CountController());

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
              countController.increase();

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
