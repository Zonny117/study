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

  //getter - get 작명{}
  String get firstMember {
    return this.members[0];
  }
}
