const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];


function saveTodos() {
    /* 
        localStorage는 무조건 문자열 방식으로만 데이터를 저장한다.
        따라서 배열의 형태를 유지한채 저장하기 위해선 배열을 문자열 그대로 
        localStorage로 보내야하는데, 이때 JSON.stringify()를 사용한다.

        JSON.stringify();
        - 객체 혹은 배열이든 어떠한 형태도 문자열로 변환하는 기능이 있다.
    */
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
};


function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);