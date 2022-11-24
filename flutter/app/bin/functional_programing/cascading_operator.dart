void main(){
  List<int> even = [2,4,6,8];
  List<int> odd = [1,3,5,7];


  // 리스트안에 리스트 두개가 들어감
  print([even,odd]);

  // 리스트안에 데이터를 풀어 넣는다.
  print([...even, ...odd]);


  // 아예 새로운 리스트를 생성하기 때문에 같은 자료가 아님을 알 수 있다.
  print(even == [...even]);
}