void main() {
  Set blackpink = {
    '로제',
    '제니',
    '리사',
    '지수',
  };

  // Set의 매핑은 리스트와 동일하다.
  final newSet = blackpink.map((x)=>'블랙핑크 $x').toSet();

  print(newSet);
}
