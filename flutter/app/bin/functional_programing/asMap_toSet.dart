void main() {
  List<String> blackpink = ['리사', '로제', '지수', '제니', '제니'];

  print(blackpink.asMap());
  print(blackpink.toSet());

  // asMap() 리스트를 매핑
  Map blackpinkMap = blackpink.asMap();

  print(blackpinkMap.keys.toList());
  print(blackpinkMap.values.toList());

  // Set.from() 리스트로 부터 세트를 만드는 방법 중 하나
  Set blackpinkSet = Set.from(blackpink);

  print(blackpinkSet.toList());
}
