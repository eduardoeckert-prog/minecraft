// ===== USUÁRIOS (TESTE) =====

const users = [
{
nickname: "Eduardo",
password: "1234"
},
{
nickname: "Admin",
password: "admin"
}
];

let currentUser = null;

// ===== LOGIN =====

function login() {
const nickname = document
.getElementById("nickname")
.value
.trim();

const password = document
.getElementById("password")
.value
.trim();

const user = users.find(u =>
u.nickname === nickname &&
u.password === password
);

if (!user) {
alert("Acesso negado!");
return;
}

currentUser = user;
window.currentUser = user;

document.getElementById("loginBox").style.display = "none";
document.getElementById("panel").style.display = "block";

document.getElementById("status").innerText =
"Logado como: " + currentUser.nickname;

loadWorld();
}

// ===== LOGOUT =====

function logout() {
currentUser = null;
window.currentUser = null;

document.getElementById("panel").style.display = "none";
document.getElementById("loginBox").style.display = "block";

document.getElementById("nickname").value = "";
document.getElementById("password").value = "";

document.getElementById("gameArea").innerHTML = "";
}

// ===== EXPORT =====

window.login = login;
window.logout = logout;
window.currentUser = currentUser;
