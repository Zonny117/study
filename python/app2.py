# list - 변수에 여러가지 데이터를 저장하는 방식 js의 배열과 유사
중고차 = ['k5', 'white', 5000]

# 데이터 수정
중고차[1] = 'black'

print(중고차[0])

# dictionary - 역시 여러개 데이터를 저장하는 방식, list와는 달리 중괄호를 사용
# 자료에는 이름과 값이 필요하다. js 객체와 유사
중고차2 = { 'brand' : 'BMW', 'model' : '520d'}


# 데이터 수정
중고차2['brand'] = 'AUDI'

print(중고차2['brand'])