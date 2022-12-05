import 'package:flutter/material.dart';
// style.dart를 style이라는 이름으로 불러옴
import './style.dart' as style;
// 서버 요청 패키지
import 'package:http/http.dart' as http;
import 'dart:convert';
// 스크롤 관련 유용한 함수를 가진 패키지
import 'package:flutter/rendering.dart';
// 이미지 피커 패키지
import 'package:image_picker/image_picker.dart';
import 'dart:io';

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
  var userImage;
  var userContent;

  userData() {
    var userData = {
      "id": data.length,
      "image": userImage,
      "likes": 5,
      "date": "July 25",
      "content": userContent,
      "liked": false,
      "user": "zonny"
    };

    setState(() {
      data.insert(0, userData);
    });
  }

  setUserContent(c) {
    setState(() {
      userContent = c;
    });
  }

  getData() async {
    // get 요청
    var result = await http
        .get(Uri.parse('https://codingapple1.github.io/app/data.json'));
    var result2 = jsonDecode(result.body);

    // 스테이트 설정
    setState(() {
      data = result2;
    });
  }

  addData(i) {
    setState(() {
      data.add(i);
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
            actions: [
              IconButton(
                onPressed: () async {
                  // 휴대폰 저장된 이미지 불러오기
                  var picker = ImagePicker();
                  var image =
                      await picker.pickImage(source: ImageSource.gallery);
                  if (image != null) {
                    setState(() {
                      userImage = File(image.path);
                    });
                  }

                  // 새페이지 띄우는법
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (c) => Upload(
                                userImage: userImage,
                                setUserContent: setUserContent,
                                userData: userData,
                              )));
                },
                icon: Icon(Icons.add_box_outlined),
                iconSize: 30,
              ),
            ]),
        body: [Contents(data: data, addData: addData), Text('샵페이지')][tab],
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

class Contents extends StatefulWidget {
  final data, addData;

  const Contents({super.key, this.data, this.addData});

  more() async {
    var get = await http
        .get(Uri.parse('https://codingapple1.github.io/app/more1.json'));
    var get2 = jsonDecode(get.body);

    addData(get2);
  }

  @override
  State<Contents> createState() => _ContentsState();
}

class _ContentsState extends State<Contents> {
  var scroll = ScrollController();

  @override
  void initState() {
    super.initState();

    // 변수가 변경될때마다 실행되는 함수
    scroll.addListener(() {
      // 현재 스크롤 위치 == 스크롤 높이
      if (scroll.position.pixels == scroll.position.maxScrollExtent) {
        widget.more();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    if (widget.data.isNotEmpty) {
      return Container(
        child: ListView.builder(
          controller: scroll,
          itemCount: widget.data.length,
          itemBuilder: (context, index) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                widget.data[index]['image'].runtimeType == String
                    ? Image.network(widget.data[index]['image'])
                    : Image.file(widget.data[index]['image']),
                Text('좋아요 ${widget.data[index]['likes']}',
                    style: TextStyle(fontWeight: FontWeight.bold)),
                Text(widget.data[index]['user']),
                Text(widget.data[index]['content'])
              ],
            );
          },
        ),
      );
    } else {
      return Text('로딩중');
    }
  }
}

class Upload extends StatelessWidget {
  final userImage, setUserContent, userData;
  Upload({super.key, this.userImage, this.setUserContent, this.userData});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        actions: [
          IconButton(
              onPressed: () {
                userData();
                Navigator.pop(context);
              },
              icon: Icon(Icons.check))
        ],
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.file(userImage),
          Text('이미지 업로드 화면입니다.'),
          TextField(
            onChanged: (val) {
              setUserContent(val);
            },
          ),
          IconButton(
              onPressed: () {
                Navigator.pop(context);
              },
              icon: Icon(Icons.close))
        ],
      ),
    );
  }
}
