let world = {
blocks: []
};

// ===== SALVAR MUNDO =====

function saveWorld() {
if (!window.currentUser) {
alert("Faça login primeiro.");
return;
}

const key =
btoa(window.currentUser.nickname) + "_world";

localStorage.setItem(
key,
JSON.stringify(world)
);

alert("Mundo salvo!");
}

// ===== CARREGAR MUNDO =====

function loadWorld() {
if (!window.currentUser) return;

const key =
btoa(window.currentUser.nickname) + "_world";

const data = localStorage.getItem(key);

if (data) {
world = JSON.parse(data);

```
console.log(
  "Mundo carregado:",
  world
);
```

} else {
console.log(
"Nenhum mundo salvo."
);
}
}

// ===== ABRIR MINECRAFT =====

function openMinecraft() {
window.open(
"./Eaglercraft.html",
"_blank"
);
}

// ===== FECHAR MINECRAFT =====

function closeMinecraft() {
document.getElementById("gameArea").innerHTML = "";
}

// ===== EXPORTAR =====

window.saveWorld = saveWorld;
window.loadWorld = loadWorld;
window.openMinecraft = openMinecraft;
window.closeMinecraft = closeMinecraft;
