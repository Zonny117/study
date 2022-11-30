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
          appBar: AppBar(),
          /* 
            ListView.builder(itemCount, itemBuilder) 
            - for문을 사용하지 않고 반복적으로 위젯을 생성할 수 있다.
            - 패러미터는 2개가 필요하며, itemCount는 반복할 횟수, itemBuilder는 실행할 함수를 받는다.
            - itemBuilder는 context, index 패러미터 2개가 필요하며, index는 반복문이 돌면서 +1씩 증가하는 정수이다.
            - itemBuilder는 생성할 위젯이 있어야하기 때문에 당연히 리턴값이 필요하다.

            ListTile()
            - Row로 일일히 생성하다보면 코드가 너무 길어짐, 이걸 축약해서 간단하게 만들 수 있는 위젯이다.
           */
          body: ListView.builder(
            itemCount: 3,
            itemBuilder: (context, index) => 
            ListTile(
              leading: Icon(Icons.man),
              title: Text('홍길동'),
            ),
          ),
          bottomNavigationBar: bottomAppbar(),
        )
    );
  }
}

class bottomAppbar extends StatelessWidget {
  const bottomAppbar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(Icons.phone),
          Icon(Icons.message),
          Icon(Icons.menu),
        ],
      ),
    );
  }
}