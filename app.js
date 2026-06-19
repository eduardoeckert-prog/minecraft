let currentUser = null;

let world = {
  blocks: []
};

// 🔐 LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(u =>
    u.email === email && u.password === password
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

function openMinecraft() {
  window.open("https://classic.minecraft.net/", "_blank");
}

function saveWorld() {
  if (!currentUser) return;

  localStorage.setItem(
    currentUser.email + "_world",
    JSON.stringify(world)
  );

  alert("Mundo salvo!");
}

function loadWorld() {
  if (!currentUser) return;

  const data = localStorage.getItem(currentUser.email + "_world");

  if (data) {
    world = JSON.parse(data);
    console.log("Mundo carregado:", world);
  }
}
