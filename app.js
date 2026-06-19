const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

let user = null;

// 🌍 mundo local (simples)
let world = {
  blocks: []
};

// 🔐 LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(u => {
      user = u.user;

      document.getElementById("loginBox").style.display = "none";
      document.getElementById("panel").style.display = "block";

      document.getElementById("status").innerText =
        "Logado: " + user.email;

      loadWorld(); // já carrega ao entrar
    })
    .catch(() => alert("Erro no login"));
}

// 🎮 ABRIR MINECRAFT CLASSIC
function openMinecraft() {
  window.open("https://classic.minecraft.net/", "_blank");
}

// 💾 SALVAR MUNDO NA NUVEM
function saveWorld() {
  if (!user) return alert("Faça login primeiro!");

  db.collection("worlds").doc(user.uid).set({
    world: world,
    updated: Date.now()
  });

  alert("Mundo salvo na nuvem!");
}

// 📥 CARREGAR MUNDO DA NUVEM
function loadWorld() {
  if (!user) return;

  db.collection("worlds").doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        world = doc.data().world;
        console.log("Mundo carregado:", world);
      } else {
        console.log("Nenhum mundo salvo ainda");
      }
    });
}
