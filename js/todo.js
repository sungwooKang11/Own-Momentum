const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function dltToDo(event) {
    const li = event.target.parentElement;    
    li.remove(); 
}

function makeToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", dltToDo);

    li.appendChild(span);
    li.appendChild(btn); //append 는 맨 마지막에
    todoList.appendChild(li);
}

function hdlToDoSbmt(e) {
    e.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    toDos.push(newToDo);
    makeToDo(newToDo); 
    saveToDos();
}

toDoForm.addEventListener("submit", hdlToDoSbmt);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("This is", item));
}
 


