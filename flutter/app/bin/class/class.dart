void main() {
  // 클래스 Idol의 인스턴스 생성, dart에서는 new를 생략할 수 있다.
  Idol blackPink = const Idol(
    '블랙핑크',
    ['지수', '제니', '리사', '로제'],
  );

  Idol blackPink2 = const Idol(
    '블랙핑크',
    ['지수', '제니', '리사', '로제'],
  );

  // 각각의 인스터스는 서로 다르지만, const 키워드가 존재하고, 데이터가 서로 동일하다면 같다고 판단한다.
  print(blackPink == blackPink2);

  print(blackPink.name);
  print(blackPink.members);

  blackPink.sayHello();
  blackPink.introduce();

  print('-----------------');

  // 새로운 인스턴스를 만들어서 다양하게 활용할 수 있다.
  Idol youAndI = Idol.fromList([
    ['아이유', '조니'],
    '유애나'
  ]);

  print(youAndI.name);
  print(youAndI.members);
  youAndI.sayHello();
  youAndI.introduce();
}

class Idol {
  /* 
   보통 개발할때 데이터를 변경하고 싶으면 새로운 인스턴스를 생성하도록 유도해야한다.
   따라서 아래와 같이 인스턴스를 생성할때 데이터를 고정한다. final이기 때문에 다른 값으로 대체될 수 없다. 
   immutable 방식의 프로그래밍이라고 한다.
  */
  final String name;
  final List<String> members;

  // 인스턴스 생성시 뿌려준다.
  // 컨스트럭터의 이름은 반드시 클래스의 네임과 일치해야한다.
  // this는 클래스 자체를 의미함.

  // 컨스트럭터 생성 첫번째 방법
  // Idol(String name, List<String> members): this.name = name, this.members = members;

  // 컨스트럭터 생성 두번째 방법 (더 간결하게 표현할 수 있다.)
  const Idol(this.name, this.members);

  /* 
    네임드 컨스트럭터 

    - 클래스네임.작명();

    인스턴스를 생성할 때 또 다른 선택지를 제공한다.
   */
  Idol.fromList(List values)
      : this.members = values[0],
        this.name = values[1];

  void sayHello() {
    print('안녕하세요 ${this.name}입니다.');
  }

  void introduce() {
    print('저희 멤버는 ${this.members}가 있습니다.');
  }
}
