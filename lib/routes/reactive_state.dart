import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/state/count_controller.dart';

class ReactiveState extends StatelessWidget {
  final ReactiveCountController countController =
      Get.put(ReactiveCountController());

  ReactiveState({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('단순 상태관리'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // 반응형 상태관리의 경우 GetBuilder가 아닌 Obx 위젯으로 값을 불러와야한다.
            Obx(
              // count의 value 속성까지 불러와야 obs 값을 불러올 수 있다.
              () => Text("${countController.count.value}",
                  style: const TextStyle(fontSize: 30)),
            ),
            ElevatedButton(
              style: const ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Colors.blue),
              ),
              onPressed: () {
                countController.increse();
              },
              child: const Text("+", style: TextStyle(color: Colors.white)),
            ),
            // 반응형의 경우, 값에 변화가 있을때만 재렌더링이 실행된다.
            // 따라서, 5의 값이 바뀌지 않은 이상, 아무리 버튼을 클릭해도,
            // 화면을 다시 그리지 않아, 불필요한 리소스 낭비를 방지할 수 있다.
            ElevatedButton(
              style: const ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Colors.blue),
              ),
              onPressed: () {
                countController.putNumber(5);
              },
              child: const Text("5로 변경", style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }
}
