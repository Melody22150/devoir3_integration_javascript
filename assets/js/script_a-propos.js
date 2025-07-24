// JS MENU BURGER

  const burgerButton = document.querySelector('.burger-button');
  const burgerContainer = document.querySelector('.burger-container');

  burgerButton.addEventListener('click', () => {
    const expanded = burgerButton.getAttribute("aria-expanded") === "true" || false;
    burgerButton.setAttribute("aria-expanded", !expanded);
    burgerContainer.classList.toggle("active");
    burgerButton.classList.toggle("active");
  });