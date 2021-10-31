const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNM_KEY = "username";

function clickbtn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNM_KEY, username);
    hdlGreetings(username);
}

function hdlLinkCilck() {
    alert("Mood!");
}

loginButton.addEventListener("click", clickbtn);
link.addEventListener("click",hdlLinkCilck);

function hdlGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsernm = localStorage.getItem(USERNM_KEY);

if(savedUsernm === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", clickbtn);
}else {
    hdlGreetings(savedUsernm);
}