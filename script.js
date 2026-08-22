/* Import the modular Firebase SDK from the CDN */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* Firebase configuration – use the connected project exactly */
const firebaseConfig = {
  apiKey: "AIzaSyAwBa4ZL_rlxEt7dD7QtKw6zM4hJLqRLOg",
  authDomain: "gen-lang-client-0882994356.firebaseapp.com",
  projectId: "gen-lang-client-0882994356",
  storageBucket: "gen-lang-client-0882994356.firebasestorage.app",
  messagingSenderId: "gen-lang-client-0882994356",
  appId: "1:1067016824611:web:c0ae86d684c4041888ce96",
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/* UI Elements */
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");
const userInfoDiv = document.getElementById("user-info");
const userNameP = document.getElementById("user-name");
const userPhotoImg = document.getElementById("user-photo");
const aiSection = document.getElementById("ai-section");
const askBtn = document.getElementById("ask-btn");
const promptInput = document.getElementById("prompt");
const responsePre = document.getElementById("response");

/* Sign‑in flow – opens the Google popup */
signInBtn.addEventListener("click", async () => {
  signInBtn.disabled = true;
  try {
    await signInWithPopup(auth, googleProvider);
    // UI updates are handled in the auth state listener
  } catch (error) {
    console.error("Google sign‑in error:", error);
    alert("Sign‑in failed. Check the console for details.");
  } finally {
    signInBtn.disabled = false;
  }
});

/* Sign‑out flow */
signOutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign‑out error:", error);
  }
});

/* React to authentication state changes */
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Show user profile
    userNameP.textContent = user.displayName || "Anonymous";
    userPhotoImg.src = user.photoURL || "";
    userInfoDiv.classList.remove("hidden");
    signInBtn.classList.add("hidden");
    signOutBtn.classList.remove("hidden");
    aiSection.classList.remove("hidden");
  } else {
    // Hide user info
    userInfoDiv.classList.add("hidden");
    signInBtn.classList.remove("hidden");
    signOutBtn.classList.add("hidden");
    aiSection.classList.add("hidden");
    responsePre.textContent = "";
    promptInput.value = "";
  }
});

/* Placeholder AI interaction – replace with real API call as needed */
askBtn.addEventListener("click", () => {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    alert("Please enter a question.");
    return;
  }
  responsePre.textContent = `You asked: "${prompt}"\n\n[AI response would appear here]`;
});