const clock = document.querySelector('#clock');


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

setInterval(getClock, 1000);


/* 
    padStart(문자열 길이, 빈 문자열 수 만큼 넣을 문자열);

    1) 문자열 길이 - 결과값으로 출력될 최소 문자열 길이를 지정한다.
    2) 지정한 문자열보다 작은 길이의 문자열에 메서드를 호출할 경우, 
    빈 문자열에 넣고 싶은 문자열을 삽입하여, 첫번째 인자에서 지정한 문자열 길이만큼의
    문자열 결과값을 만든다.

    padStart는 문자열 앞에 삽입, padEnd는 문자열 뒤에 삽입
*/