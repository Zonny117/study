void main() {
  // typedef를 add함수로 설정
  Operation operation = add;

  // 리턴값은 add의 리턴값을 받아온다.
  int result = operation(10,20,30);  
  print(result);

  // typedef를 substract 함수로 설정
  operation = substract;
  
  // 리턴값은 substract의 리턴값을 받아온다.
  int result2 = operation(10,20,30);
  print(result2);


  // calculate xyz를 typedef의 add 함수의 인자로 받아오며, add의 리턴값으로 오고 있다.
  int result3 = calculate(30, 20, 30, add);

  print(result3);

  // calculate xyz를 typedef의 substract 함수의 인자로 받아오며, substract의 리턴값으로 오고 있다.
  int result4 = calculate(30, 20, 30, substract);
  print(result4);
}


/* 
  typedef

  하나의 함수를 가지고 여러 함수를 호출해 리턴값을 받을 수 있다.
  최초 선언된 리턴값의 데이터타입과 함수이 패러미터 데이터타입 등이 전부 일치해야 작동한다.
  최초 선언된 typedef는 시그니처라고도 부른다.
 */
typedef Operation = int Function(int x, int y, int z);

// typedef의 리턴값은 함수이고 정수 타입이다. 따라서 함수도 똑같은 타입으로 작성한다.
int add(int x, int y, int z) => x + y + z;

int substract(int x, int y, int z) => x - y - z;


/* 
  typedef를 가장 편리하게 사용하는 방법

  함수를 정의할 때 typedef도 파라미터 및 리턴값으로 설정한다.
  함수가 호출될때, 각 x,y,z 값과 choice 부분에 사용할 함수를 호출하면
  그때 그때 typedef를 활용할 수 있다.
 */
int calculate(int x, int y, int z, Operation choice) => choice(x, y, z);