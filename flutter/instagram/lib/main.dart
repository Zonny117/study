import 'package:flutter/material.dart';
import 'package:instagram/notification.dart';
import 'package:instagram/saveData.dart';
import './shop.dart';
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
import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

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
    initNotification(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        floatingActionButton: FloatingActionButton(
          child: Text('알림'),
          onPressed: () {
            showNotification2();
          },
        ),
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
        body: [Contents(data: data, addData: addData), Shop()][tab],
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

  var profileImage = [];

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

  imageData() async {
    var result = await http
        .get(Uri.parse('https://codingapple1.github.io/app/profile.json'));
    var result2 = jsonDecode(result.body);
    profileImage = result2;
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
      /* 
        [CustomScrollView]
        - 스크롤 박스를 만드는 위젯
        - 페러미터는 slivers를 갖으며, 리스트를 값으로 받는다.
        - 리스트안에는 svliver로 시작하는 위젯을 넣으면 된다.
        예) Container와 같은 성격의 위젯은 SliverToBoxAdapter,
        GridView는 SliverGrid 등
       */
      body: CustomScrollView(
        slivers: [
          // Container()와 같은 기능을 한다.
          SliverToBoxAdapter(
            child: ProfileHeader(),
          ),
          /* 
            그리드 영역만 스크롤을 하고 싶으면, 커스텀 스크롤 뷰를 사용하지 않고
            그리드 영역만 GridVeiw.Builder를 사용하면 되지만,

            그리드를 포함한 박스 전체를 스크롤하기 위해 커스텀 스크롤 뷰를 사용했다.
            커스텀 스크롤 뷰에서는 SliverGrid로 사용한다.
           */
          SliverGrid(
            // delegate 패러미터 => 그리드에 보여줄 내용물을 설정할 수 있다.
            // SliverChildBuilderDelegate 위젯으로 설정
            delegate: SliverChildBuilderDelegate(
              (context, index) => Container(
                // SliverGrid 같은 경우에는 데이터가 늦게 도착해도 봐줌
                child:
                    Image.network(context.watch<Store1>().profileImage[index]),
              ),
              childCount: context.watch<Store1>().profileImage.length,
            ),
            // gridDelegate 패러미터 => 한 열에 열거할 개수를 설정할 수 있다.
            gridDelegate:
                SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3),
          ),
        ],
      ),
    );
  }
}

class ProfileHeader extends StatelessWidget {
  const ProfileHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
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
          ElevatedButton(
            onPressed: () {
              context.read<Store1>().imageData();
            },
            child: Text('사진 가져오기'),
          )
        ],
      ),
    );
  }
}
