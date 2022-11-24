void main() {
  Idol blackPink = Idol(
    '블랙핑크',
    ['지수', '제니', '리사', '로제'],
  );

  Idol youAndI = Idol(
    '유애나',
    ['아이유', '조니'],
  );

  //getter
  print(blackPink.firstMember);
  print(youAndI.firstMember);
  

  //setter - 하나의 패러미터만 받을 수 있기 때문에 = 다음에 오는 것이 setter의 패러미터로 들어온다.
  blackPink.firstMember = '지드래곤';

  print(blackPink.firstMember);
  
}

/* 
  getter - 데이터를 가져올때
  setter - 데이터를 설정할때
 */
class Idol {
  String name;
  List<String> members;

  Idol(this.name, this.members);

  Idol.fromList(List values)
      : this.members = values[0],
        this.name = values[1];

  void sayHello() {
    print('안녕하세요 ${this.name}입니다.');
  }

  void introduce() {
    print('저희 멤버는 ${this.members}가 있습니다.');
  }

  //getter - get 작명{} - 간단한 데이터 가공을 할때 주로 사용한다.
  String get firstMember {
    return this.members[0];
  }

  //setter - set 작명(반드시 한개의 패러미터만 올수있다.){} - 잘안쓰는 기능, 왜냐하면 보통 데이터를 임의로 변경하는 것을 막기 위해 final을 선언하면, set은 작동할 수가 없다.
  set firstMember(String name){
    this.members[0] = name;
  }
}
