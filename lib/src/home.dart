import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/dependency/dependency_manage.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("라우터"),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextButton(
              onPressed: () {
                // 페이지 이동
                // Get.to(() => const FirstPage());

                // 네임드 방식
                Get.toNamed("/first");
              },
              child: const Text("첫번째 페이지"),
            ),
            TextButton(
              onPressed: () {
                Get.to(() => const DependencyManagePage());
              },
              child: const Text("의존성 주입"),
            ),
          ],
        ),
      ),
    );
  }
}
