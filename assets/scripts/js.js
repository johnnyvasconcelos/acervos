let btnMobile = document.querySelector(".btn-mobile");
let menuMobile = document.querySelector(".menu-mobile");
btnMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
  btnMobile.classList.toggle("show");
});
