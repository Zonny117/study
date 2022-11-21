void main() {
  addNumbers(10, 20, 30);
}

// 세개의 숫자 (x,y,z)를 더하고 짝수인지 홀수인지 알려주는 함수
// 순서가 중요한 파라미터 positional parameter
// 존재 유무가 상관없는 파라미터 optional parameter
addNumbers(int x, int y, int z) {
  int sum = x + y + z;

  if (sum % 2 == 0) {
    print('짝수입니다.');
  } else {
    print('홀수입니다.');
  }
}
