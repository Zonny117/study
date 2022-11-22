void main() {
  // 클래스 Idol의 인스턴스 생성, dart에서는 new를 생략할 수 있다.
  Idol blackPink = Idol(
    '블랙핑크',
    ['지수', '제니', '리사', '로제'],
  );

  print(blackPink.name);
  print(blackPink.members);

  blackPink.sayHello();
  blackPink.introduce();

  print('-----------------');

  // 새로운 인스턴스를 만들어서 다양하게 활용할 수 있다.
  Idol you_and_I = Idol('유애나', ['아이유', '조니']);

  print(you_and_I.name);
  print(you_and_I.members);
  you_and_I.sayHello();
  you_and_I.introduce();
}

class Idol {
  // 클래스의 네임과 멤버스를 받아서
  String name;
  List<String> members;

  // 인스턴스 생성시 뿌려준다.
  // 컨스트럭터의 이름은 반드시 클래스의 네임과 일치해야한다.
  // this는 클래스 자체를 의미함.

  // 컨스트럭터 생성 첫번째 방법
  // Idol(String name, List<String> members): this.name = name, this.members = members;

  // 컨스트럭터 생성 두번째 방법 (더 간결하게 표현할 수 있다.)
  Idol(this.name, this.members);

  void sayHello(){
    print('안녕하세요 ${this.name}입니다.');
  }

  void introduce(){
    print('저희 멤버는 ${this.members}가 있습니다.');
  }
}
