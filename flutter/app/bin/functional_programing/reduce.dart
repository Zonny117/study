void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  final total = numbers.reduce((prev, next) {
    print('prev: $prev'); // prev에는 맨처음에 리스트 첫번째 데이터가 들어감,
    print('next : $next'); // next는 두번째 부터 시작해 차례대로 데이터가 들어감
    print('total : ${prev + next}');
    print('----------------------------');

    // 함수가 한번 실행이 되고 그다음번에는 리턴값이 prev로 들어감, 결과적으로 reduce는 데이터 수만큼 반복하면서 최종 리턴값을 전달한다.
    return prev + next;
  });

  print(total);

  List<String> words = ['안녕하세요', '아이유', '팬입니다.'];

  final fan = words.reduce((value, element) => value + ' ' + element);

  print(fan);

  /* 
    ※주의점
    reduce는 맨처음에 지정된 데이터타입을 무조건 따라간다.
    예를들어 int를 데이터를 받은 reduce는 무조건 int 타입으로 리턴값을 전달한다.
    다른 타입을 리턴하려 할 경우 오류가 발생한다.
   */
}
