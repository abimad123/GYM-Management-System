
// js/auth.js

async function login() {
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Now check the role from Firestore
    const doc = await db.collection("users").doc(user.uid).get();

    if (!doc.exists) {
      msg.textContent = "No user data found.";
      return;
    }

    const data = doc.data();

    if (data.role !== role) {
      msg.textContent = `Access denied. You're not a ${role}.`;
      auth.signOut(); // logout immediately
      return;
    }

    // Redirect based on role
    if (role === "admin") window.location.href = "admin.html";
    else if (role === "member") window.location.href = "member.html";
    else if (role === "user") window.location.href = "index.html";

  } catch (error) {
    msg.textContent = error.message;
  }
}
