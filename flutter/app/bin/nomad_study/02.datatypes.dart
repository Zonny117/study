void main() {
  // 모든 데이터타입도 또한 객체이다. dart가 객체지향언어인 이유.

  // collection if => collection 데이터에 사용할 수 있는 조건문

  bool a = true;

  List<int> numbers = [
    1,
    2,
    3,
    4,
    if (a) 5, //조건문을 통해 List를 변경할 수 있다.
  ];

  print(numbers);

  // /////////////////////////////////////////////////////////////////////////

  
}
