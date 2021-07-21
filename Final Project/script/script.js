const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('#navigation');

window.addEventListener("load", () => {
    hambutton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );
});