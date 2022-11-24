void main() {
  print('------Idol-----------');
  Idol apink = Idol(name: '에이핑크', membersCount: 5);

  apink.sayName();
  apink.sayMebersCount();

  print('------상속-----------');
  // 부모 Idol 클래스로부터 모든 속성을 상속받음
  BoyGroup bas = BoyGroup('bas', 4);

  bas.sayName();
  bas.sayMebersCount();
  bas.sayMale();

  print('------상속-----------');

  GirlGroup red = GirlGroup('레드', 5);

  red.sayFemale();

  print('----------타입 비교--------');

  print(apink is Idol); //트루가 나옴 Idol 인스턴스이기 떄문
  print(apink is GirlGroup); // 펄스, 자식 클래스는 받을 수 없다.
  print(apink is BoyGroup);  // 펄스, 자식 클래스는 받을 수 없다.


  print('----------타입 비교2--------');
  print(bas is Idol); // 트루가 나옴, Idol 클래스가 부모이기 때문
  print(bas is BoyGroup); // 트루, BoyGroup 인스턴스이기 때문
  print(bas is GirlGroup); //펄스, 자식 클래스 간 공유는 불가능하다.


}


// 상속 - inheritance

/* 
  상속을 받으면 부모 클래스의 모든 속성을 자식 클래스가 부여받음.
 */

class Idol {
  String name;
  int membersCount;

  Idol({
    required this.name,
    required this.membersCount,
  });

  void sayName() {
    print('저는 ${this.name}입니다.');
  }

  void sayMebersCount() {
    print('${this.name}은 ${this.membersCount}명의 멤버가 있습니다.');
  }
}

// Idol 클래스로부터 상속 부모에게 넘기는 것은 불가능
class BoyGroup extends Idol {
  BoyGroup(
    String name,
    int membersCount,
  ) : super( //상속된 클래스는 super를 선언
          name: name,
          membersCount: membersCount,
        );

  void sayMale() {
    print('저는 바나나입니다.');
  }
}

class GirlGroup extends Idol {
  GirlGroup(
    String name,
    int membersCount,
  ) : super(
          name: name,
          membersCount: membersCount,
        );

  void sayFemale() {
    print('저는 레드입니다.');
  }
}
