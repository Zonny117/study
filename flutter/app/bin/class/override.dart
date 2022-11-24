void main() {
  TimesTwo tt = TimesTwo(2);

  print(tt.calculate());

  TimesFour tf = TimesFour(2);

  print(tf.calculate());
}

// method - 클래스 내부에 있는 함수
// override - 덮어쓰다 (우선시하다)
class TimesTwo {
  final int number;

  //constructor
  TimesTwo(
    this.number,
  );

  // method
  int calculate() {
    // number 변수는 하나뿐이기 떄문에 this를 생략할 수 있음. 다트에서는 이런 방식을 선호
    return number * 2;
  }
}

class TimesFour extends TimesTwo {
  TimesFour(
    int number,
  ) : super(number);

  // 오버라이드 - 덮어쓰기, 이름과 타입이 완전히 똑같은 메서드를 작성을 하면 덮어씌워진다. 오버라이드는 생략할 수 있지만, 가독성을 위해 표시를 해두는 것이 좋다.
  @override
  int calculate() {
    //super - number를 부모 클래스에서 가져왔기 때문에 super를 사용, 하지만 부모 클래스에서 상속을 받아 컨스트럭터에 number가 있기 때문에 this.number 혹은 this를 생략할수도 있다.
    // return super.number * 4;

    // 만약 부모 클래스의 메소드는 살리고 싶다면, 리턴 값에 메소드 자체를 가져오는 방법도 있다.
    return super.calculate() * 2;
  }
}
