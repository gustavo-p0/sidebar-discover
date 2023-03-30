const button = document.querySelector(`#toggle`);
const aside = document.querySelector(`#aside`);

button.addEventListener("click", (e) => {
  e.stopPropagation();
  aside.classList.toggle(`active`);
});
