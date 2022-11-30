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
            backgroundColor: Color(0xffffffff),
            title: Text( '금호동3가', style: TextStyle(color:Colors.black, fontWeight: FontWeight.w600)),
            leading: Icon(Icons.arrow_drop_down, color: Colors.black),
            shadowColor: Color(0xc1c1c1c1),
            actions: [Icon(Icons.search, color: Colors.black), Icon(Icons.menu, color: Colors.black), Icon(Icons.alarm, color: Colors.black)],
          ),
          body: Container(
            height: 150,
            padding: EdgeInsets.all(10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(child: Image.asset('assets/dog.png'), margin: EdgeInsets.fromLTRB(0, 0, 20, 0)),
                Expanded(
                  child:  Column(
                  mainAxisAlignment:MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('캐논 DSLR 100D(단렌즈, 충전기 16기가SD 포함', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w600)),
                    Text('성동구 행당동 · 끌올 10분전', style: TextStyle(color: Colors.grey),),
                    Text('210,000원', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 16)),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Icon(Icons.favorite),
                        Text('4')
                      ]
                    )
                  ],
                )
                ),
              ],
            ),
          ),
        )
    );
  }
}
