import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

// state를 사용하기 위해선 클래스 자체가 statefulWidget을 상속받아야한다.
class _MyAppState extends State<MyApp> {

  // state 위젯 안에서 생성된 모든 변수는 state로 기록된다.
  // state의 활용은 리액트와 마찬가지로 자주 변하게 될 데이터 혹은 실시간으로 변화하는 값을 보여줘야되는 것을 기준으로 한다.
  int a = 1;
  List<String> name =  ['아이유', '조니', ' 개간로'];
  List<int> like = [0, 0, 0];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
          /* 
            플로팅 액션 버튼
            - 패러미터 2개 필요,
            - child, onPressed
            - onPressed는 눌렀을 때 실행할 함수를 정의할 수 있다.
           */
          floatingActionButton: FloatingActionButton(
            child: Text(a.toString()),
            onPressed: (){
              setState(() {
                a++;
              });
            },
          ),
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
            itemBuilder: (context, index)  =>
            ListTile(
              leading: Text(like[index].toString()),
              title: Text(name[index]),
              trailing: TextButton(
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.blue),
                ),
                child: Text('좋아요', style: TextStyle(color: Colors.white)),
                onPressed: (() {
                  // 실제로 state로 기록된 변수를 변경했을때 재렌더링을 하고 싶으면 setState((){})를 이용해야한다.
                  setState(() {
                    like[index]++;
                  });
                }),
              ),
            ),           
          ),
          bottomNavigationBar: BottomAppbar(),
        )
    );
  }
}

class BottomAppbar extends StatelessWidget {
  const BottomAppbar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // decoration이 선언되면, 모든 스타일 속성은 decoration안에서 작성해야한다. 안그럼 오류남 ㅅㄱ.
      decoration: BoxDecoration(
        // 박스 색상
        color: Colors.white,
        // 박스 그림자
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.7),
            spreadRadius: 0,
            blurRadius: 5.0,
            offset: Offset(0, 0),
          )
        ]
      ),
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