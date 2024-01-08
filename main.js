const poster = document.querySelectorAll('.poster');

poster.forEach(i => {
  i.addEventListener('mousemove', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;

    /* 
      [일차함수]
      y=ax+b

      예) 포스터 영역안에서 마우스 커서가 0에 위치할 때 로테이션 각도를 4도로
      500에 위치할때 각도를 -4도로 설정.

      4 = 0a + b 
      => b = 4

      -4 = 500a + b 
      => -4 = 500a + 4
      => -4 -4 = 500a
      => -8 = 500a
      => -8/500 = 500a/500
      => a = -8/500
      => 4로 약분 
      => a = -2/125


      rotateY = -2/125 * e.offsetX + 4

      x축은 (0, 4), (730, -4)

      a=-4/365

      rotateX = -4/365 * e.offsetY + 4
    */

    let rotateX = parseInt((-4 / 365) * y + 4);
    let rotateY = parseInt((-2 / 125) * x + 4);
    i.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  i.addEventListener('mouseleave', function () {
    i.style.transform = '';
  });
});
