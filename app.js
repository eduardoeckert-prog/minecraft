let world = {
blocks: []
}; 

// ===== SALVAR MUNDO =====
function saveWorld() {
if (!currentUser) return;

const key = btoa(currentUser.email);

localStorage.setItem(
key + "_world",
JSON.stringify(world)
);

alert("Mundo salvo!");
}

// ===== CARREGAR MUNDO =====
function loadWorld() {
if (!currentUser) return;

const key = btoa(currentUser.email);
const data = localStorage.getItem(key + "_world");

if (data) {
world = JSON.parse(data);
console.log("Mundo carregado:", world);
} else {
console.log("Nenhum mundo salvo.");
}
}

// ===== ABRIR MINECRAFT =====
function openMinecraft() {
window.open("./mc/", "_blank");
}

// ===== FECHAR MINECRAFT =====
function closeMinecraft() {
document.getElementById("menu").style.display = "block";
document.getElementById("gameArea").innerHTML = "";
}

// export global
window.saveWorld = saveWorld;
window.loadWorld = loadWorld;
window.openMinecraft = openMinecraft;
window.closeMinecraft = closeMinecraft;
