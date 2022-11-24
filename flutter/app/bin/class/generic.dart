void main(){
  // 클래스의 generic를 스트링으로 설정
  Lecture<String> lecture1 = Lecture('123', 'leture1');

  lecture1.printIdType();

  Lecture<int> lecture2 = Lecture(123, 'lecture2');

  lecture2.printIdType();
}

// generic - 타입을 외부에서 받을때 사용, <>를 붙여서 쓴다. <>안에 이름은 작명할 수 있다. 여러개를 넣을 수 있다.
class Lecture<T>{
  final T id;
  final String name;

  Lecture(this.id, this.name);

  void printIdType(){
    print(id.runtimeType);
  }
}