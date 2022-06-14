const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");


function handleToDoSubmit(e) {
    e.preventDefault();
    console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);