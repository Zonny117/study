void main() {
  print(sayHello(
    name: 'zonny',
    country: 'Korea',
    age: 31,
  ));

  print(sayHello2('조니', 31));
}

/* 
  네임드 패러미터 - 순서가 중요하지 않은 패러미터이며, null 값 방지도 된다.(기본값을 정했기 때문)
  중괄호가 있어야하며, 기본값도 지정되어야함.
  만약, 기본값을 사용하지 않는다면, required 키워드로 필수값으로 지정할 수 있다.
 */
String sayHello({
  String name = 'anon',
  int age = 99,
  required String country,
}) {
  return "Hello $name, you are $age, and you come from $country";
}

// /////////////////////////////////////////////////

/* 
  포지셔널 패러미터 - 순서가 중요한 패러미터, 아무것도 감싸지 않음
  옵셔널 패러미터 - 있거나 없어도 되는 패러미터, nullable 오퍼레이터가 있어야하며 대괄호로 감쌈, 기본값 필요.
 */
String sayHello2(String name, int age, [String? country = 'cuba']) {
  return "Hello $name, you are $age, and you come from $country";
}

// ////////////////////////////////////////////////////////////

/* 
  QQ 오퍼레이터

  물음표 두개를 이어붙인 연산자, 

  왼쪽 리턴 ?? 오른쪽 리턴
  - 왼쪽 리턴값이 null일 경우 오른쪽 값을 리턴.

  왼쪽 변수 ??= 오른쪽 변수
  - 왼쪽 변수가 null일 경우 오른쪽 값을 변수에 할당.
 */

String sayName(String? name) => name?.toUpperCase() ?? 'Zonny';
String sayName2(String? name) => name ??= 'Zonny';



// ////////////////////////////////////////////////////////////////
