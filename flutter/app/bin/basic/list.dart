void main() {
  // List 대문자로 시작
  // 여러 데이터를 타입을 지정해 리스트를 만듬

  // 문자타입
  List<String> blackPink = ['제니','지수','로제','리사'];
  
  // 정수타입
  List<int> numbers = [1,2,3,4,5];

  print(blackPink);
  print(numbers);


  print(blackPink[0]);
  print(numbers[2]);

  print(blackPink.length);

  blackPink.add('조니');

  print(blackPink);

  blackPink.remove('조니');

  print(blackPink);


  print(blackPink.indexOf('로제'));
}