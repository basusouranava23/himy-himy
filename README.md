# AI Demo – Google Sign‑In

A tiny static web app that demonstrates Google Sign‑In using Firebase Authentication.  
After signing in, the user's name and photo are shown and a placeholder AI prompt area becomes visible.

## How it works
1. **Firebase SDK (compat)** is loaded from the CDN.
2. The provided `firebaseConfig` initializes the project **gen‑lang‑client‑0882994356**.
3. Clicking **Sign in with Google** triggers `signInWithPopup` using `GoogleAuthProvider`.
4. On successful sign‑in the UI updates to show the user's profile and a mock AI prompt box.
5. **Sign Out** clears the session.

## Running locally
1. Clone / download the files.
2. Open `index.html` in any modern browser (no build step required).

## Extending
Replace the placeholder AI logic in `script.js` (the click handler for **Ask**) with a call to your preferred AI API (e.g., OpenAI, Cohere, etc.). The user object (`auth.currentUser`) is already available for authorization if needed.

## Security note
All Firebase operations happen client‑side via the CDN SDK. Ensure your Firebase Auth sign‑in methods and any other services are configured with appropriate security rules.

---

Enjoy experimenting! 🚀