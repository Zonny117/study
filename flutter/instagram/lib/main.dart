import 'package:flutter/material.dart';
// style.dart를 style이라는 이름으로 불러옴
import './style.dart' as style;
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MaterialApp(
    // theme - 공통으로 스타일 지정을 할 수 있는 기능, css로 치면 공통 css를 잡는 느낌, 또한, 자기 자신과 가장 가까운 theme 설정을 따라간다.
    // style.dart를 style이라는 이름으로 불러왔고 그 파일 안에 있는 theme이라는 변수를 사용하려면 아래와 같이 작성된다. 객체 지향이다.
    theme: style.theme,
    home: MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var tab = 0;

  var data = [];

  getData() async {
    // get 요청
    var result = await http
        .get(Uri.parse('https://codingapple1.github.io/app/data.json'));
    var result2 = jsonDecode(result.body);

    setState(() {
      data = result2;
    });
  }

  //위젯 로드될때 실행, initState는 async를 붙일 수 없기 때문에 await을 쓰려면 외부에 함수를 작성한다.
  @override
  void initState() {
    super.initState();
    getData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text(
              'Instagram',
              style: TextStyle(color: Colors.black),
            ),
            actions: [Icon(Icons.add_box_outlined)]),
        body: [Contents(data: data), Text('샵페이지')][tab],
        bottomNavigationBar: BottomNavigationBar(
          showSelectedLabels: false,
          showUnselectedLabels: false,
          onTap: (i) {
            setState(() {
              tab = i;
            });
          },
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home_outlined), label: 'home'),
            BottomNavigationBarItem(
                icon: Icon(Icons.shopping_bag_outlined), label: 'shopping')
          ],
          elevation: 20,
        ));
  }
}

class Contents extends StatelessWidget {
  final data;

  const Contents({super.key, this.data});

  @override
  Widget build(BuildContext context) {
    if (data.isNotEmpty) {
      return Container(
        child: ListView.builder(
          itemCount: 3,
          itemBuilder: (context, index) {
            return Container(
              padding: EdgeInsets.fromLTRB(10, 20, 10, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.network(data[index]['image']),
                  Text('좋아요 ${data[index]['likes']}',
                      style: TextStyle(fontWeight: FontWeight.bold)),
                  Text(data[index]['user']),
                  Text(data[index]['content'])
                ],
              ),
            );
          },
        ),
      );
    } else {
      return Text('로딩중');
    }
  }
}
