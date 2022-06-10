const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function onSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    // localStorage는 브라우저의 기본 기능으로 객체 형식으로 원하는 값을 브라우저 내에 저장할 수 있다.
    // 새로고침을 해도 저장된 값이 유지된다.
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
};


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onSubmit);
} else {
    paintGreetings(savedUsername);
}