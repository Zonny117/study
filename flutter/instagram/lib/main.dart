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
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(
        create: (context) => Store1(),
      ),
      ChangeNotifierProvider(
        create: (context) => Store2(),
      ),
    ],
    child: MaterialApp(
      // theme - 공통으로 스타일 지정을 할 수 있는 기능, css로 치면 공통 css를 잡는 느낌, 또한, 자기 자신과 가장 가까운 theme 설정을 따라간다.
      // style.dart를 style이라는 이름으로 불러왔고 그 파일 안에 있는 theme이라는 변수를 사용하려면 아래와 같이 작성된다. 객체 지향이다.
      theme: style.theme,
      home: MyApp(),
    ),
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

  /* 
    [SharedPreferences 패키지]
    - 사용자 휴대폰에 임시로 저장하는 방식
    - 중요한 데이터는 서버에 저장하지만, 상대적으로 덜 중요한 데이터들은 이 방식으로 저장하는 것이 좋다.
    - 사용자가 해당 앱의 데이터를 삭제하는 순간, 저장된 데이터는 사라진다. (반영구적)
    - 이미지는 저장할 수 없다. 이미지를 저장하려면 cashed_network_image 패키지 등을 이용해야 한다.

    ※ 활용 메서드

    [데이터 저장법]
    set(작명, 저장할 데이터); 기본적으로 저장은 이런 방식인데 타입을 지정해서 저장하는 것이 더 좋다.
    setString, setDouble 등...

    그러나 예외적으로 Map 자료는 저장할 수 없다. json으로 저장을 해야한다.
    json은 String으로 사기를 쳐서 저장할 수 있다.

    setString(작명, 'jsonEncode(저장할 Map자료)');

    [데이터 불러오기]
    get(불러올 데이터 이름); 기본적으로 저장된 데이터를 불러올때 쓰는 방식인데, 이 역시 타입을 이용해서 불러오는것이 좋다.
    getString, getBool 등...

    [데이터 삭제]
    remove(삭제할 데이터 이름);
   */

  saveData() async {
    var storage = await SharedPreferences.getInstance();

    var map = {'age': 20};

    storage.setString('Map', jsonEncode(map));
    // json 파일을 디코딩하려면 스트링 타입으로 데이터를 받아야한다. 따라서 데이터는 항상 타입을 지정하는 습관이 중요하다.
    // 또한, null 체크가 필요하다.
    var result = storage.getString('Map') ?? '빈값';

    print(jsonDecode(result));
  }

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
    saveData();
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
                  /* 
                    빌드컨텍스트는 비동기 작업과 함께 사용하지 말라고 경고 표시가 난다.
                    이유는 await 이후에 사용할 빌드컨텍스트를 가지고 있는 것은 오류가 어디서 발생했는지 찾기 힘들기 때문이다.
                    해결 방법은 조건문으로 해당 위젯이 mounted(준비)가 되지 않은 경우 리턴시키는 방법이다.
                   */
                  if (!mounted) return;
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
                GestureDetector(
                  child: Text(widget.data[index]['user']),
                  onTap: () {
                    Navigator.push(
                        context,
                        // 페이지 전환 애니메이션
                        PageRouteBuilder(
                          pageBuilder:
                              (context, animation, secondaryAnimation) =>
                                  Profile(),
                          transitionsBuilder:
                              (context, animation, secondaryAnimation, child) =>
                                  FadeTransition(
                            opacity: animation,
                            child: child,
                          ),
                        ));
                  },
                ),
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

/* 
  [provider 패키지]
  state를 한번에 관리할 수 있는 패키지이다. 
  앱 규모가 커질경우 스테이트를 관리하기 빡세다.
  이걸 한번에 관리해주는 것이 provider이고
  모든 위젯이 이 provider안에 있는 state를 가져다 쓸 수 있다.
  만약 앱규모가 작다면 그냥 원래하던 방식으로 스테이트를 사용하는 것도 방법이다.

  provider가 한개라면 MaterialApp을 ChangeNotifierProvider로 감싼다.
  ChangeNotifierProvider는 create 패러미터가 필요하다. 

  provider 여러개라면 MatrialApp을 MultiProvider로 감싼다.
  그리고 Providers라는 패러미터가 필요하며, 리스트 형식으로 ChangeNotifierProvider를 추가하면 된다. (상단 main 함수 참고)
 */
class Store1 extends ChangeNotifier {
  var follower = 0;
  var check = false;

  onClick() {
    if (check) {
      follower++;
      check = false;
    } else {
      follower--;
      check = true;
    }
    // 재렌더링을 실행하는 함수
    notifyListeners();
  }
}

class Store2 extends ChangeNotifier {
  var name = 'Zonny';
}

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(context.watch<Store2>().name,
            style: TextStyle(color: Colors.black)),
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Container(
              width: 50,
              height: 50,
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(50), color: Colors.grey),
            ),
            Text('팔로워 ${context.watch<Store1>().follower}명'),
            ElevatedButton(
                onPressed: () {
                  context.read<Store1>().onClick();
                },
                child: Text('팔로우')),
          ],
        ),
      ),
    );
  }
}
