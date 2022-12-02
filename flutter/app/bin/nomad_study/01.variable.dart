void main() {
  // var - 최초로 받은 값의 타입이 지정됨, var 변수를 수정할 때 다른 타입으로 바꿀 수 없음.
  var name = '조니'; // 값이 문자열이기 떄문에 String으로 지정됨.
  name = '아이유'; // 값을 변경할 때, 최초로 지정된 타입만 가능. 여기서는 String이기 때문에 String만 받을 수 있음.

  // 변수의 타입을 아예 지정할 수 있음. ex) String, int, double, List, Map 등..
  String name2 = '조니'; // String 타입 선언 - name2라는 변수는 String만 받을 수 있음. (대문자 주의)
  name2 = '아이유'; //String만 받음.

  // dynamic - 어떤 타입이든 전부 값으로 넣을 수 있음.
  var name3; // 아무런 값도 주지 않으면 dynamic 타입으로 지정됨
  dynamic name4; // 혹은 dynamic 키워드 선언

  name3 = true;
  name3 = 1;
  name3 = '조니'; //어떤 타입이든 전부 대체되는 것을 확인할 수 있다.

  /* 
    null safety = null 값을 제대로 체크해야 런타임 에러를 방지할 수 있다.
    타입 지정과 null 체크는 앱 처리속도를 좀더 빠르게 만들어주기 떄문에 
    사용자가 앱을 이용할 때 더욱 쾌적한 환경을 만들 수 있다.
   */
}
