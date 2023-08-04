import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/routes/next.dart';
import 'package:get_x/routes/simple_state.dart';

class FirstPage extends StatelessWidget {
  const FirstPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("첫번째 페이지"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextButton(
              onPressed: () {
                // 뒤로 가기
                Get.back();
              },
              child: const Text("뒤로가기"),
            ),
            TextButton(
              onPressed: () {
                // 페이지를 이동할 때 인자를 전달할 수 있다.
                // 네임드에서도 사용가능.
                Get.to(() => const NextPage(), arguments: "인자 전달");
              },
              child: const Text("다음 페이지"),
            ),
            TextButton(
              onPressed: () {
                // 동적 URL 세팅
                Get.toNamed("/user/12345?name=사랑&age=15");
              },
              child: const Text("동적 URL"),
            ),
            TextButton(
              onPressed: () {
                Get.to(() => const SimpleState());
              },
              child: const Text("단순 상태관리"),
            ),
            TextButton(
              onPressed: () {
                // 위젯트리 삭제 후 이동
                // Get.offAll(() => const Home());

                // 네임드 방식
                Get.offAllNamed("/");

                /* 
                  Get.offNamed / Get.offAllNamed의 차이

                  offNamed는 현재 페이지만 위젯트리 내에서 삭제하고 이동하며,,
                  offAllNamed는 쌓여있던 위젯트리를 전부 삭제하고 이동한다.
                 */
              },
              child: const Text("홈으로"),
            ),
          ],
        ),
      ),
    );
  }
}
