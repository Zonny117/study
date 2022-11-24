void main() {
  Map<String, String> harry = {
    'Harry': '해리',
    'Ron': '론',
    'Hermione': '헤르미온느',
  };

  // 맵을 매핑하는 방식, key와 value를 패러미터로 받으며,  MapEntry 클래스를 이용해 새로운 맵을 작성한다.
  final result = harry.map((key, value) =>
      MapEntry('harry potter character $key', '해리포터 캐릭터 $value'));

  print(result);

}
