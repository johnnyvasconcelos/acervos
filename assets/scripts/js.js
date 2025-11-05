let btnMobile = document.querySelector(".btn-mobile");
let menuMobile = document.querySelector(".menu-mobile");
btnMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
  btnMobile.classList.toggle("show");
});
const anos = document.querySelectorAll(".ano");
const date = new Date();
const anoAtual = date.getFullYear();
for (let i = 0; i < anos.length; i++) {
  anos[i].innerText = anoAtual - 1994;
}
