void main() {
  int number = 2;

  print(number);

  print('---------------------');
  print(number % 2);

  print('------------');

  number++;

  print(number);

  print('------------');

  double? number2 = 4.0;

  number2 = null;

  // number2가 null 값이면 3.0이 되라는 오퍼레이터
  number2 ??= 3.0;

  print(number2);

  print('------------');

  int number3 = 1;
  int number4 = 2;

  print(number3 > number4);

  print(number3 is! int);
  print(number3 is int);

  print('------------');

  bool result = 12 > 10 && 1 > 0;

  print(result);
}
