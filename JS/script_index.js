/* MESSAGE DE BIENVENUE */

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcome-popup");
  const submitBtn = document.getElementById("submit-name");
  const input = document.getElementById("username");
  const banner = document.getElementById("welcome-message");
  const message = document.getElementById("personalized-message");

  const storedName = localStorage.getItem("userName");

  function showWelcome(name) {
    message.textContent = `Bienvenue dans les Chroniques, ${name} !`;
    banner.classList.remove("hidden");

    // Faire disparaître après 5 secondes
    setTimeout(() => {
      banner.classList.add("fade-out");
    }, 5000);

    // Cacher définitivement après l'animation
    banner.addEventListener("animationend", () => {
      banner.classList.add("hidden");
    }, { once: true });
  }

  if (!storedName) {
    popup.classList.remove("hidden");
  } else {
    showWelcome(storedName);
  }

  submitBtn.addEventListener("click", () => {
    const name = input.value.trim();
    if (name !== "") {
      localStorage.setItem("userName", name);
      popup.classList.add("hidden");
      showWelcome(name);
    } else {
      alert("Merci d'entrer un prénom valide.");
    }
  });
});

