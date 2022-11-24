void main() {
  Employee zonny = Employee('조니');
  Employee iu = Employee('아이유');

  // 각각의 인스턴스에 귀속이 되어있는 형태, 조니라는 인스턴스에서 변경했기 때문에 얘만 값이 변경됨, 아이유는 그대로임.
  zonny.name = '유애나';

  zonny.nameAndBuilding();
  iu.nameAndBuilding();

  print('-------static-------');
  // 인스턴스가 아닌 클래스 자체에 귀속이 된다. 따라서 static 값이 변경되면 같은 클래스를 공유하는 모든 인스턴스의 해당값이 변경됨.
  Employee.building = '오투타워';

  zonny.nameAndBuilding();
  iu.nameAndBuilding();
}

class Employee{

  // static은 인스턴스에 귀속되지 않고 클래스에 귀속된다.
  static String? building;
  String name;

  Employee(
    this.name,
  );

  void nameAndBuilding(){
    print('제 이름은 $name입니다. $building 건물에서 근무하고 있습니다.');
  }

  static void printBuilding(){
    print('저는 $building 건물에서 근무중입니다.');
  }
}