import 'package:flutter/material.dart';
import 'package:get/get.dart';

class NextPage extends StatelessWidget {
  const NextPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // 이전 페이지에서 전달 받은 인자를 사용할 수 있다.
        title: Text('${Get.arguments}'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
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
