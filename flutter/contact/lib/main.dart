import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Container(
        // 플러터의 단위는 픽셀이 아닌 LP이다.
        width: 50,
        height: 50,
        color: Colors.blue,
      ),
    );
  }
}

/* 
  이미지 추가법
  Images.asset('경로') 
  경로는 pubspec.yaml 파일에 flutter: 밑에 
  assets:
    - assets/
  라고 작성. 앞에 띄어쓰기 중요!! asset이란 폴더 안에 있는 이미지 파일을 전부 불러옴.

  
 */