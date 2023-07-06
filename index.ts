// 타입스크립트

// 배열 타입 선언은 배열에 담길 타입과 그뒤에 []를 선언하면 된다.
const number: number[] = [1, 2, 3, 4];

// readonly는 읽기 전용 속성으로 해당 데이터는 한번 할당되어 있는 값을 다시는 수정할 수 없도록 한다.
const number2: readonly number[] = [1, 2, 3, 4];

// tuple - 순서와 타입이 정해져있는 자료
const arr: [string, number, boolean] = ['이름', 2, false];

// 객체 타입 선언
type Player = {
  name: string;
  // ?는 null값이 올 수 있음, 따라서 optional
  age?: number;
};

const obj: Player = {
  name: '홍길동',
  //  age가 없어도 오류가 나지 않는다. optional하기 때문
};

// unknown
let a: unknown;

// unknown 타입은 해당 변수에 어떤 형식의 데이터가 들어올지 모를때 사용한다.
// 따라서 나중에 할당된 데이터 타입이 무엇이냐에 따라 분기 처리를 해주어야한다.
if (typeof a === 'string') {
  a = '홍길동';
} else if (typeof a === 'number') {
  a = 1;
}

// never - 함수가 리턴값을 절대로 하지 않는 상황을 의미한다. (자주 사용되지 않음, 하지만 의미는 알아둘 것)
function neverTest(name: string | number) {
  if (typeof name === 'string') {
    // name은 string
    name;
  } else if (typeof name === 'number') {
    // name 은 number
    name;
  }
  // 이도 저도 아닌 상황일 때 보통 오류 처리를 하곤 한다. never 타입은 이럴 때 사용된다.
  else {
    // name은 never
    name;
  }
}

// void - 리턴 값이 없는 함수를 뜻한다.
function empty() {
  console.log('void 함수');
}

// call singnature
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
