// JS MENU BURGER

  const burgerBtn = document.querySelector(".burger-button");
  const burgerContainer = document.querySelector(".burger-container");

  burgerBtn.addEventListener("click", () => {
    burgerContainer.classList.toggle("active");
  });

    burgerBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    burgerContainer.classList.toggle("active");
  }
});