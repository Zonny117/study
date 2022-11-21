void main() {
  // nullable - null이 될 수 있다.
  // non-nullable - null이 될 수 없다.
  // null - 아무런 값도 있지 않다.

  // 데이터 타입 뒤 물음표를 주면 null 값도 될 수 있다.
  String? factory = 'factory';

  factory = null;

  print(factory);

  // !를 주면 null도 될 수 있는 데이터 타입이지만 해당 라인에서는 null이 올 수 없다는 의미다.
  // print(factory!);
}