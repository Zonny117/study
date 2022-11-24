void main() {
  List<String> blackpink = ['제니', '지수', '로제', '리사'];

  /* 
    map() - List의 메소드이며, 패러미터를 받아와야한다.
    패러미터에는 List의 데이터가 각각 담긴다.
    리턴값은 literable이 된다.
    literable은 잘 사용하지 않기 때문에, 
    List 자료형으로 바꿔서 씀.
   */
  final newBlack = blackpink.map((item) {
    return '블랙핑크 $item';
  });

  print(blackpink);
  print(newBlack.toList());

  // 화살표로 대체 리턴 생략
  final newBlack2 = blackpink.map((x) => '블랙핑크 $x');

  print(newBlack2.toList());

  // 매핑된 리스트들은 각각의 리스트이며, 서로 같지 않다. 아예 새로운 리스트를 생성한것.
  print(newBlack == newBlack2);

  String number = '13579';

  // 스플릿에 아무것도 넣지 않으면, 한글자씩 잘라서 리스트를 만듬
  final parsed = number.split('').map((x) => '$x.jpg').toList();

  print(parsed);
}
