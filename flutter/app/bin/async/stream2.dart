import 'dart:async';

void main() {
  // stream 리스너는 yield된 값을 감지해 리턴한다.
  calc(1).listen((event) {
    print('calc(1) : $event');
  });

  playAllStream().listen((event) {
    print(event);
  });
}

// Stream은 Future와 달리 async에 *을 붙여야한다.
Stream<int> calc(int number) async* {
  for (int i = 0; i < 5; i++) {
    // 리턴값은 yield로 선언한다.
    yield i * number;

    //async*에서도 당연히 await 사용가능
    //1초간격으로 loop가 실행된다.
    await Future.delayed(Duration(seconds: 1));
  }
}

// Future는 await를 이용해 함수 자체도 실행 순서를 지정할 수 있지만,
// Stream은 yield*을 통해 함수를 차례로 실행할 수 있다.
Stream<int> playAllStream() async* {
  yield* calc(1);
  yield* calc(1000);
}
