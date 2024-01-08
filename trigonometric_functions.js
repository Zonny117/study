const circle = document.getElementById('circle');
const size = circle.getBoundingClientRect().width / 2;
const standard = size - 15; //#circle의 정가운데이면서 .dot 크기의 절반
const length = 360 / 20; //원에 20도씩 .dot을 배치

/* 
    각도를 셈하는 단위는 2가지가 있다.
    1. degree

    2. radian => 반지름과 같은 길이의 곡선이 형성한 각을 호각이라하고, 이를 1 라디안이라 한다.
    degree로 환산하면 57도 정도가 나온다.

    180도를 표현하는데 라디안 단위로는 딱 맞아떨어지지 않는다. 3 라디안하고도 살짝 남는데, 
    계산을 하면 3.141592...으로 순환소수가 도출된다. 이는 PI(파이)라 하고, 180도로 정의한다.

    수학함수 cos, sin, tan는 전부 이 라디안 단위를 인자로 받는다. 따라서 특정 각도를 라디안 단위로 변환해서 
    해당 함수들로 활용해야한다.

    [각도 변환]
    degree * (PI/180) = radian

    [라디안 변환]
    radian * (180/PI) = degree

    [삼각함수]
    1. cos = 코사인; x좌표
    2. sin = 사인; y좌표
    3. tan = 탄젠트; sin/cos => y/x
*/

for (let i = 0; i < length; i++) {
  const rad = i * 20 * (Math.PI / 180); //라디안으로 변환
  const x = standard + size * Math.cos(rad); // x좌표
  const y = standard + size * Math.sin(rad); // y좌표

  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.style.top = `${y}px`;
  dot.style.left = `${x}px`;

  circle.appendChild(dot);
}
