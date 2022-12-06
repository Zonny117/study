import 'dart:math';

void main() {
  var zonny = Zonny('조니', 1000);
  var iu = Zonny('아이유', 1000);

  zonny.sayIU();
  iu.sayIU();

  // 네임드 패러미터 방식 인스턴스
  var info = Info(
    name: '아이유',
    age: 31,
    sex: '여',
    country: '대한민국',
  );

  print(
      '${info.name}은 ${info.age}세이며, ${info.sex}성이다. 또한, ${info.country} 출신이다.');

  // 새로 초기화한 생성자를 이렇게 인스턴스로 쓸수 있다.
  var man = Info.man(name: '조니', age: 31);
  var girl = Info.girl('아이유', 30);

  man.introduce();
  girl.introduce();


  // json 자료형으로 만들어 쓸 수도 있다.
  var pluralInfo = [
    {
      'name': '조니',
      'age': 31,
      'sex': '남',
      'country': '대한민국',
    },
    {
      'name': '아이유',
      'age': 30,
      'sex': '여',
      'country': '대한민국',
    },
    {
      'name': '요나스',
      'age': 31,
      'sex': '남',
      'country': '독일',
    },
  ];

  // 네임드 생성자 fromJson에 있는 자료와 일치한 키값을 가진 pluralInfo를 forEach로 활용
  pluralInfo.forEach((element) {
    Info.fromJson(element);

    print(element['name']);
  });
}

// 클래스명은 관습적으로 앞이 대문자로 시작된다.
class Zonny {
  final String name;
  int xp;

  // 생성자는 클래스를 동적으로 만들어준다. 고정된 패터리터 값이 아닌 동적으로 클래스를 사용할 수 있다.
  Zonny(this.name, this.xp);

  void sayIU() {
    print('$name은 아이유가 국힙원탑이라고 생각한다.');
  }
}

class Info {
  final String name;
  int age;
  String sex;
  String country;

  /* 
    만약에 생성자가 받는 패러미터가 존나 많다고 가정해보자, 포지셔널로 받게될 경우 순서를 전부 기억해야하는데
    그건 존나 비효율적임. ㅇㅋ?
    그래서 생성자가 받는 패러미터를 네임드 패러미터로 받는 방법도 있음.
    그러면 결과적으로 패러미터 순서를 기억할 이유가 없다. 또한, 기본값도 특별한 상황이 아니고서야 지정하지 않는 것을 지향한다.
    
    플러터에서는 이러한 방식을 아주 많이 활용한다. 진짜임 ㅅㄱ.
   */
  Info({
    required this.name,
    required this.age,
    required this.sex,
    required this.country,
  });

  // 네임드 생성자 => 생성자에 이름을 붙임, 해당 생성자의 패러미터를 초기화한다. 생성자 안에서 클래스의 기존 변수를 재설정한다고 보면 됨.
  // : 콜론을 붙여서 클래스의 패러미터를 전부 초기화해야 한다.

  // 네임드 방식 생성자
  Info.man({
    required String name,
    required int age,
  })  : this.name = name,
        this.age = age,
        this.sex = "남",
        this.country = "대한민국";

  // 포지셔널 방식 생성자
  Info.girl(String name, int age)
      : this.name = name,
        this.age = age,
        this.sex = "여",
        this.country = "대한민국";

  void introduce() {
    print('$name $age $sex $country');
  }

  Info.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        age = json['age'],
        sex = json['sex'],
        country = json['country'];
}
