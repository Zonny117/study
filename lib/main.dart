import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/routes/first_page.dart';
import 'package:get_x/routes/url.dart';
import 'package:get_x/src/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      initialRoute: "/",
      // getX의 네임드 라우팅 설정
      getPages: [
        GetPage(
          name: "/",
          page: () => const Home(),
          // 페이지 별로 트랜지션을 적용할 수 있다.
          transition: Transition.zoom,
        ),
        GetPage(
          name: "/first",
          page: () => const FirstPage(),
          transition: Transition.cupertino,
        ),
        // 동적 URL
        GetPage(
          name: "/user/:uid",
          page: () => const SpecificPage(),
        )
      ],
    );
  }
}
