const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

let user = null;

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
    })
    .catch(() => alert("Erro no login"));
}
