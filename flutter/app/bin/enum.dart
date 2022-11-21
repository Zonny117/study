// enum 작명 {}
// 해당 데이터만 들어있다는 것을 강제로 설정한다.
// 데이터의 스펠링이 오타가 나는등 오류 발생시 바로 확인이 가능하다.
enum Status {
  approved, //승인
  pending, //대기
  refjected, //거절
}

void main() {
  Status status = Status.pending;

  if (status == Status.approved) {
    print('승인입니다.');
  } else if (status == Status.pending) {
    print('대기중입니다.');
  } else {
    print('거절됐습니다.');
  }
}
