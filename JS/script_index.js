/* MESSAGE DE BIENVENUE */

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcome-popup");
  const submitBtn = document.getElementById("submit-name");
  const input = document.getElementById("username");
  const banner = document.getElementById("welcome-message");
  const message = document.getElementById("personalized-message");

  // Vérifie si un prénom est déjà stocké
  const storedName = localStorage.getItem("userName");
 
    // Supprime les balises HTML ou scripts potentiels
    function sanitize(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function showWelcome(name) {
    const safeName = sanitize(name);
    message.textContent = `Bienvenue dans les Chroniques, ${safeName} !`;
    banner.classList.remove("hidden");

    // Faire disparaître après 5 secondes
    setTimeout(() => {
      banner.classList.add("fade-out");
    }, 5000);

    // Cacher définitivement après l'animation
    banner.addEventListener(
      "animationend",
      () => {
        banner.classList.add("hidden");
      },
      { once: true }
    );
  }

  // Si aucun prénom stocké → on affiche le popup
  if (!storedName) {
    popup.classList.remove("hidden");
    console.log("Aucun prénom trouvé, affichage du popup.");
  } else {
    showWelcome(storedName);
    console.log("Nom trouvé dans le localStorage :", storedName);
  }

  submitBtn.addEventListener("click", () => {
    const rawName = input.value.trim();
    const name = sanitize(rawName);

    if (name !== "") {
      localStorage.setItem("userName", name);
      popup.classList.add("hidden");
      showWelcome(name);
      console.log("Nom saisi :", name);
    } else {
      alert("Merci d'entrer un prénom valide.");
      console.log("Prénom non valide saisi");
    }
  });
});

// Confirmation chargement
console.log("Script de la page d'accueil chargé.");
