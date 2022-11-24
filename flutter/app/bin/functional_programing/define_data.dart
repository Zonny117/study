void main() {
  List<Map<String, String>> nameList = [
    {
      'name': '아이유',
      'group': '유애나',
    },
    {
      'name': '조니',
      'group': '바스',
    }
  ];

  // print(nameList);

  final people =
      // String? 값은 String에 올수 없다. name에 null 올수도 있는 자료형태인데, !가 없다면, String으로 선언한 상황에서 null이 오면 오류가 생기기 때문에,
      // !로 null이 없는 자료만 받아오게 할 수 있다.
      nameList.map((x) => Name(name: x['name']!, group: x['group']!)).toList();

  print(people.where((element) => element.group == '유애나'));
}

class Name {
  final String name;
  final String group;

  Name({
    required this.name,
    required this.group,
  });

  @override
  // toString => Object 클래스에 속한 기본 메소드
  // 자료를 가공
  String toString(){
    return '기본(name: $name, group: $group)';
  }
}
