import 'package:flutter/material.dart';

var theme = ThemeData(
      // appBar와 같은 놈들은 appBarTheme이라고 따로 설정을 해야 공통 설정을 할 수 있는 경우가 있음.
      // 이건 어쩔 수 없음, 그냥 플러터 특징이라 안되는 건 불편함을 감수해야함.
      appBarTheme: AppBarTheme(
        color: Colors.white,
        elevation: 1,
        iconTheme: IconThemeData(color: Colors.black)
      ),
      bottomAppBarTheme: BottomAppBarTheme(
        elevation: 1,
      )
        
        
      
    );


/* 
  main.dart에서 style을 import할 때 이 style.dart안에 있는 변수를 전부 가져가기 때문에
  main.dart에서 같은 변수명이 중복되면 오류가 발생할 수 있다.
  따라서 중복을 막기 위해 해당 다른파일에서는 사용하지 못하는 변수도 작성할 수 있다.

  var _작명;

  변수명 앞에 언더바를 표시한다.
  그럼 이 변수는 다른 파일에서 임포트해도 사용할 수가 없다.
*/
