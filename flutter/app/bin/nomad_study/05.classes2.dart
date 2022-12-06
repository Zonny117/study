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

  // 부모클래스에서 상속받은 패러미터와 본인만 가지고 있는 패러미터를 전부 사용하고 있다.
  var detail = Detail(country: '대한민국', age: 31, name: '조니', sex: '남');
  // 자식 클래스가 오버라이드로 덮어썼기 때문에 추가적으로 함수가 실행되고 있다.
  detail.sayName();

  // 믹스인된 Sarang 클래스에 있는 dog 메서드를 호출
  print(detail.dog());
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
    print(name);
  }
}

// extends는 상속, with은 믹스인(mixin)
// extends는 부모 클래스의 모든걸 상속받지만, mixin은 해당 클래스에 있는 골라서 뺏어올 수 있다.
class Detail extends Info with Sarang {
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

// mixin을 하기 위해선 해당 클래스에 생성자가 없어야한다!
class Sarang {
  String dog() {
    return '사랑이';
  }
}
