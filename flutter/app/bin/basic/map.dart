void main() {
  // Map 대문자로 시작
  // key / value가 필요하다. 따라서 데이터타입도 두개를 지정해야한다.

  Map<String, String> dic = {
    'Harry Potter': '해리포터',
    'Ron Weasley': '론 위즐리',
    'Hermione Granger': '해르미온느 그레인저',
  };

  print(dic);

  dic.addAll({
    'spiderman' : '스파이더맨'
  });

  print(dic);
}
