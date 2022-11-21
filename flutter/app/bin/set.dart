void main() {
  //Set
  final Set<String> names = {
    'code',
    'flutter',
    'black',
    'flutter',
  };

  // set은 중복된 값을 알아서 제거한다.
  // names에는 flutter가 두번 들어가 있는데, 중복되는 부분을 제거한 것을 확인할 수 있다.
  print(names);

  names.add('조니');
  print(names);

  print(names.contains('조니'));
}
