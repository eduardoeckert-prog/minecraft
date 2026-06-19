let world = {
  blocks: []
};

// ===== SALVAR MUNDO =====
function saveWorld() {
  if (!currentUser) return;

  const key = btoa(currentUser.email); // evita chave óbvia

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
  document.getElementById("menu").style.display = "none";

  const url = "https://classic.minecraft.net/";

  document.getElementById("gameArea").innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;">
      
      <button onclick="closeMinecraft()">⬅ Voltar</button>

      <iframe 
        src="${url}" 
        width="100%" 
        height="600px"
        style="border:none;">
      </iframe>

      <button onclick="window.open('${url}', '_blank')">
        Abrir em nova aba (se não carregar)
      </button>

    </div>
  `;
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
