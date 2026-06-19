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
  const url = "about:blank";

  // abre nova aba vazia (estilo unblocked games)
  const win = window.open("about:blank", "_blank");

  // se o navegador bloquear popup
  if (!win) {
    alert("Seu navegador bloqueou a abertura da aba.");
    return;
  }

  try {
    win.document.write(`
      <html>
        <head>
          <title>Minecraft 1.8.8</title>
          <style>
            body {
              margin: 0;
              overflow: hidden;
              background: black;
            }

            iframe {
              width: 100vw;
              height: 100vh;
              border: none;
            }

            #loading {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-family: Arial;
              font-size: 18px;
            }
          </style>
        </head>

        <body>

          <div id="loading">Carregando Minecraft 1.8.8...</div>

          <iframe 
            src="${url}"
            onload="document.getElementById('loading').style.display='none'"
          ></iframe>

        </body>
      </html>
    `);

    win.document.close();

  } catch (e) {
    // fallback se document.write for bloqueado
    win.location.href = url;
  }
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
