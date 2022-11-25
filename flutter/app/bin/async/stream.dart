// stream을 사용하기 위해선 dart에서 제공하는 패키지를 불러와야한다.
import 'dart:async';

void main() {
  // stream은 futrue와 달리 코드가 실행되고 있는 매순간 감지되는 값을 반환할 수 있다.
  final control = StreamController();
  // 여러개의 리스너를 받으려면 asBroadcastStream() 함수를 선언한다.
  final stream = control.stream.asBroadcastStream();

  // stream은 감지된 값을 듣고 있다.
  final listener1 = stream.listen((event) {
    print('listener1 : $event');
  });

  final listener2 = stream.listen((event) {
    print('Listener2 : $event');
  });

  // 활용예시 - 짝수값만 감지
  final listener3 = stream.where((event) => event %2 == 0).listen((event) {
    print('Listener3 : $event');
  });

  // stream상에 감지되는 값들
  control.sink.add(1);
  control.sink.add(2);
  control.sink.add(3);
  control.sink.add(4);
  control.sink.add(5);
}
