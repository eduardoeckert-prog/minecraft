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
  document.getElementById("menu").style.display = "none";

  document.getElementById("gameArea").innerHTML = `
    <button onclick="closeMinecraft()">⬅ Voltar</button>
    <iframe 
      src="https://classic.minecraft.net/" 
      width="100%" 
      height="600px"
      style="border:none;">
    </iframe>
  `;
}

function closeMinecraft() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("gameArea").innerHTML = "";
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

window.login = login;
window.loadWorld = loadWorld;
window.saveWorld = saveWorld;
window.openMinecraft = openMinecraft;
window.closeMinecraft = closeMinecraft;
