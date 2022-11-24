void main() {
  List<Map<String, String>> nameList = [
    {
      'name': '아이유',
      'group': '유애나',
    },
    {
      'name': '조니',
      'group': '바스',
    },
  ];

  // 리스트 중 그룹이 유애나인 데이터만 뽑아옴 where()는 함수를 사용한다. 자바스크립트의 필터랑 비슷
  final iu = nameList.where((x)=>x['group'] == '유애나');  

  print(iu);
}
