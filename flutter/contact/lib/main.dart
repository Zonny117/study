import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  List<String> name =  ['아이유', '조니', ' 개간로'];

  @override
  /* 
    build의 context 자신의 부모, 조상 위젯 정보를 담고있는 패러미터
    이 context가 있어야 사용이 가능한 위젯들이 있다.
    다이얼로그는 부모 중에 materialApp이 있어야하는데, 
    build의 리턴으로 materialApp을 받게되면,
    build의 부모는 없게되어 오류가 난다.

    따라서 materialApp을 build 바깥으로 빼내는 방법이나,
    materialApp 안쪽에 build를 하나더 생성하고, 해당 build의 context를 다이얼로그가 받아오게 하면 된다.
   */
  Widget build(BuildContext context) {
    return Scaffold(
          floatingActionButton: FloatingActionButton(
            onPressed: (){
              // 다이얼로그를 표시하는 위젯이며, context를 필수로 받아온다.
              // showDialog의 부모는 scaffold, 조상은 materialApp이 된다.
              showDialog(context: context, builder: (context) {
                return Dialog(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(0))),
                  child: Container(
                    width: 300,
                    height: 200,
                    padding: EdgeInsets.all(30),
                    child: ListView(
                      children: [
                        Text('Contact', style: TextStyle(fontSize: 20),),
                        TextField(
                          style: TextStyle(fontSize: 20),
                        ),
                        Container(
                          margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              TextButton(
                                onPressed: (){}, 
                                child: Text('Cancel', style: TextStyle(color: Colors.blue),)
                              ),

                            ],
                          ),
                        )
                      ],
                    )
                  ),
                );
                  
              });
            },
          ),
          appBar: AppBar(),
          body: ListView.builder(
            itemCount: 3,
            itemBuilder: (context, index)  =>
            ListTile(
              leading: Icon(Icons.man),
              title: Text(name[index]),       
            ),           
          ),
          bottomNavigationBar: BottomAppbar(),
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