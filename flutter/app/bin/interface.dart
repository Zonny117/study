void main() {
  BoyGroup bas = BoyGroup('바스');
  GirlGroup red = GirlGroup('레드');

  bas.sayName();
  red.sayName();
}

// interface - 다트에서는 interface 키워드가 아닌 똑같이 클래스 키워드를 사용한다.
// 인스턴스화 방지를 위해 abstract 키워드를 선언한다. abstract 말그대로 추상적이다. 구체적인 설정은 implements 통해 구성할 수 있다.
abstract class IdolInterface {
  String name;

  IdolInterface(this.name);

  void sayName();
}

// extends는 상속, implements는 인터페이스를 사용한다는 의미
// 인터페이스는 클래스의 시그니처를 강제하는 특징이 있다.
// 따라서 클래스에서 설정된 구성을 따라야한다.
class BoyGroup implements IdolInterface {
  String name;

  BoyGroup(this.name);

  void sayName() {
    print('제 이름은 $name입니다.');
  }
}

class GirlGroup implements IdolInterface {
  String name;

  GirlGroup(this.name);

  void sayName() {
    print('제 이름은 $name입니다.');
  }
}
