import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('앱임'),
          ),
          body: Container(
            child: Text('안녕'),
          ),
          bottomNavigationBar: BottomAppBar(
            child: SizedBox(
              height: 50,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(Icons.phone),
                  Icon(Icons.message),
                  Icon(Icons.contact_page),
                ],
              ),
            ),
          ) 
        )
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