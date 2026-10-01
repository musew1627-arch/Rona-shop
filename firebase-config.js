/* ============================================================
   CONFIGURATION FIREBASE — Rona shop
   ------------------------------------------------------------
   Pour activer la boutique (index.html) et le panneau
   d'administration (admin.html) :

   1. Créez un projet gratuit sur https://console.firebase.google.com
      (un projet DÉDIÉ à Rona shop — ne réutilisez pas celui
      d'une autre boutique).
   2. Dans votre projet, activez :
      - Realtime Database (créez la base en mode test)
      - Authentication → méthode "E-mail / Mot de passe",
        puis ajoutez un utilisateur (le compte admin du gérant)
   3. Dans Realtime Database → onglet "Règles", collez :
      { "rules": { ".read": true, ".write": "auth != null" } }
      (la boutique lit les données sans connexion ;
       seul l'admin connecté peut les modifier)
   4. Dans "Paramètres du projet → Vos applications → Web",
      copiez la configuration et collez-la ci-dessous.
   5. Mettez FIREBASE_ENABLED = true ci-dessous.

   Sans cela, la boutique fonctionne en mode démo avec son
   catalogue intégré — rien ne change pour vos clients.
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCSC-sQh0nE0JTQopASSMdd572a8rFOjHs",
  authDomain: "rona-shop-5eff7.firebaseapp.com",
  databaseURL: "https://rona-shop-5eff7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rona-shop-5eff7",
  appId: "1:566555319953:web:e4ff86c50a90ffe08f2930"
};
window.FIREBASE_ENABLED = true;
