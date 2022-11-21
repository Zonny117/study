void main() {
  // final const는 최초 선언된 값을 절대 변경할 수 없다.

  final String hi = '하이';

  const String factory = '팩토리';

  print(hi);
  print(factory);
  
  // final const는 데이터 타입을 생략할 수 있다.

  final hi2 = '하이2';
  const factory2 = '팩토리2';

  print(hi2 + ' ' + factory2);



  // final과 const의 차이점
  // final은 빌드타임이 필요없지만, const는 빌드타임이 있어야한다.
  // Datetime.now()의 경우, 실행된 순간의 현재 시간을 표시하기 때문에 빌드가 되는 시점에는 존재하지 않는다. (알수가 없는 값)
  // 따라서 final은 가능하지만, const는 불가능하다.
  final DateTime now = DateTime.now();  

  // const DateTime now2 = DateTime.now();

}