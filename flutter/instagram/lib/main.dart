import 'package:flutter/material.dart';
// style.dart를 style이라는 이름으로 불러옴
import './style.dart' as style;

void main() {
  runApp(MaterialApp(
    // theme - 공통으로 스타일 지정을 할 수 있는 기능, css로 치면 공통 css를 잡는 느낌, 또한, 자기 자신과 가장 가까운 theme 설정을 따라간다.
    // style.dart를 style이라는 이름으로 불러왔고 그 파일 안에 있는 theme이라는 변수를 사용하려면 아래와 같이 작성된다. 객체 지향이다.
    theme: style.theme,
    home: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(
            'Instagram',
            style: TextStyle(color: Colors.black),
          ),
          actions: [Icon(Icons.add_box_outlined)]),
      body: Text('안녕'),
      bottomNavigationBar: Container(
        height: 50,
        decoration: BoxDecoration(
          boxShadow: [
            BoxShadow(offset:Offset(0, 0), color: Colors.black)
          ]
        ),
        child: BottomAppBar(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [Icon(Icons.home_outlined), Icon(Icons.shopping_bag_outlined)],
          ),
        ),
      ),
    );
  }
}
