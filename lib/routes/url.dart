import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SpecificPage extends StatelessWidget {
  const SpecificPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // 이전 페이지에서 동적 URL로 세팅한 값을 받을 수 있다.
        title: Text('${Get.parameters['uid']}'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("${Get.parameters['name']}"),
            const SizedBox(
              height: 20,
            ),
            Text("${Get.parameters['age']}"),
            TextButton(
              onPressed: () {
                Get.back();
              },
              child: const Text("뒤로가기"),
            ),
            TextButton(
              onPressed: () {
                Get.offAllNamed("/");
              },
              child: const Text("홈으로"),
            ),
          ],
        ),
      ),
    );
  }
}
