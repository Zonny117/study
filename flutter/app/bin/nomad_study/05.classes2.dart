void main() {
  /* 
    cascade operator 
    ..패러미터 = 값
    기존에 할당된 패러미터 값을 간편하게 바꿀수 있다.
    주의할 점은 맨 마지막에 세미콜론이 붙어야한다.
   */

  // 세미콜론 없음, 기존 선언값.
  var person = Info(name: '조니', age: 31, sex: '남')
    ..name = '아이유'
    ..age = 30
    // 마지막에 세미콜론으로 끝나야함
    ..sex = '여';

  person.sayName();

  var detail = Detail(country: '대한민국', age: 31, name: '조니', sex: '남');

  detail.sayName();
}

class Info {
  String name, sex;
  int age;

  Info({
    required this.name,
    required this.age,
    required this.sex,
  });

  void sayName() {
    print(this.name);
  }
}

class Detail extends Info {
  // 자식 클래스에서 선언된 변수는 자식만 사용
  String country, name, sex;
  int age;

  Detail({
    // this는 자기 자신 즉, Detail 클래스의 변수들이다.
    required this.country,
    required this.age,
    required this.name,
    required this.sex,
    // 부모 클래스의 age name sex가 required이기 때문에 자식 클래스에서도 : super()를 통해 재설정하고 있다.
    // 자식 클래스 내부에서 선언된 변수를 부모 클래스에서 상속받은 패러미터의 값으로 대체할 수 있다!!
  }) : super(age: age, name: name, sex: sex);

  // 기존 sayName 메서드를 덮어씀.
  @override
  void sayName() {
    // 부모 클래스의 sayName을 호출
    super.sayName();
    // 추가로 함수 실행
    print(country);
  }
}
