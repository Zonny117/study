// 인터페이스는 청사진이다. 객체에 사용이 되는 타입스크립트의 기능이며,
// 반드시 인터페이스에 설정된 내용을 그대로 구현해야한다.
interface InterfaceMainMenu {
  id: number;
  name: string;
  sequence: number;
}

// 인터페이스는 다른 인터페이스를 상속받을 수 있다. 이때 implements가 아닌 extends 키워드를 사용.
interface InterfaceMainMenuList extends InterfaceMainMenu {
  thumbnail: string;
  user_like: boolean;
  total_like: number;
}

// 인터페이스를 상속받을 때 implements를 사용하면 퍼포먼스에 도움이 된다.
// 실제로 js 컴파일 과정에서 인터페이스는 클래스를 생성하지 않고 삭제 되기 때문에
// 메모리를 잡아먹지 않는다. 추상 클래스를 extends 하는 것과 큰 차이점이다.
class MainMenu implements InterfaceMainMenu {
  id: number;
  name: string;
  sequence: number;

  constructor(id: number, name: string, sequence: number) {
    this.id = id;
    this.name = name;
    this.sequence = sequence;
  }
}

// 인터페이스는 public 키워드 만을 허용한다. 따라서 private, protected는 선언이 불가능하다.
// public 키워드를 사용하면 클래스 속성을 자동으로 생성하고 초기화까지 할 수 있다.
// 코드 양이 줄어듬.
class MainMenuList implements InterfaceMainMenuList {
  constructor(
    public id: number,
    public name: string,
    public user_like: boolean,
    public total_like: number,
    public sequence: number,
    public thumbnail: string
  ) {}

  static fromJson(json: MainMenuList) {
    const { id, name, user_like, total_like, sequence, thumbnail } = json;
    return new MainMenuList(
      id,
      name,
      user_like,
      total_like,
      sequence,
      thumbnail
    );
  }
}

// 여러개의 모듈을 export 하는법
export { MainMenu, MainMenuList };
