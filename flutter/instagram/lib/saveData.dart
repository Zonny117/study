import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

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
