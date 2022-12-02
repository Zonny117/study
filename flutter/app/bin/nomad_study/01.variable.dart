void main() {
  // var - 최초로 받은 값의 타입이 지정됨, var 변수를 수정할 때 다른 타입으로 바꿀 수 없음.
  var name = '조니'; // 값이 문자열이기 떄문에 String으로 지정됨.
  name = '아이유'; // 값을 변경할 때, 최초로 지정된 타입만 가능. 여기서는 String이기 때문에 String만 받을 수 있음.

  // 변수의 타입을 아예 지정할 수 있음. ex) String, int, double, List, Map 등..
  String name2 = '조니'; // String 타입 선언 - name2라는 변수는 String만 받을 수 있음. (대문자 주의)
  name2 = '아이유'; //String만 받음.
}
