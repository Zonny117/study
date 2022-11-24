void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // fold<generic>(시작값, 함수);
  final sum = numbers.fold<int>(0, (prev, next) {
    print('prev : $prev'); //fold는 reduce와 달리 맨처음에 첫번째 패러미터를 시작값으로 받는다. 그 이후부터는 reduce와 동일하다.
    print('next : $next');
    print('total : ${prev + next}');
    print('---------------------------');

    return prev + next;
  });

  print(sum);


  List<String> words = ['나는', '아이유', '팬입니다.'];

  final fan = words.fold<String>("", (previousValue, element) => previousValue + ' ' + element);

  print(fan);
  

  // reduce와의 큰 차이점이다. fold는 generic으로 데이터 타입을 결정해 다른 타입의 리턴갑을 받을 수 있다.
  final length  = words.fold<int>(0, (previousValue, element) => previousValue + element.length);

  print(length); 
}
