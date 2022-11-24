void main() {
  //for
  for (int i = 0; i < 10; i++) {
    print(i);
  }

  int total = 0;

  print('---------------');

  List<int> numbers = [1, 2, 3, 4, 5, 6];

  for (int i = 0; i < numbers.length; i++) {
    print(total += numbers[i]);
  }
  print('---------------');
  total = 0;

  // for in
  for (int number in numbers) {
    total += number;
    print(total);
  }
  print('---------------');

  //while loop
  int total2 = 0;

  while (total2 < 10) {
    total2 += 1;

    // break 반복문을 중단
    if (total2 == 5) {
      break;
    }
  }

  print(total2);
  print('---------------');

  // do while은 잘 안씀
  total2 = 0;
  do {
    total2 += 1;
  } while (total2 < 10);
  print(total2);

  print('---------------');
  for (int i = 0; i < 10; i++) {

    // continue 해당 조건에 일치할때 반복문을 스킵함. break가 아예 반복문을 종료하는 반면에 continue는 현재 조건만 스킵한다.
    if (i == 5) {
      continue;
    }
    print(i);
  }
}
