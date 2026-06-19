// ===== USUÁRIOS (SIMULAÇÃO LOCAL) =====
// Apenas para testes. Não usar em produção.
const users = [
{
email: "[teste@teste.com](mailto:teste@teste.com)",
password: "1234"
},
{
email: "[admin@admin.com](mailto:admin@admin.com)",
password: "admin"
}
];

let currentUser = null;

// ===== LOGIN =====
function login() {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const user = users.find(u =>
u.email === email &&
u.password === password
);

if (!user) {
alert("Acesso negado!");
return;
}

currentUser = user;

document.getElementById("loginBox").style.display = "none";
document.getElementById("panel").style.display = "block";

document.getElementById("status").innerText =
"Logado como: " + currentUser.email;

loadWorld();
}

// ===== LOGOUT =====
function logout() {
currentUser = null;

document.getElementById("panel").style.display = "none";
document.getElementById("loginBox").style.display = "block";

document.getElementById("gameArea").innerHTML = "";

document.getElementById("email").value = "";
document.getElementById("password").value = "";
}

// ===== EXPORT GLOBAL =====
window.login = login;
window.logout = logout;
window.currentUser = currentUser;
