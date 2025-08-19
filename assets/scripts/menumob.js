let idMob = document.querySelector('#btn-mob')
let menuMob = document.querySelector('#menu-mob')

idMob.addEventListener('click', () => {
    menuMob.classList.toggle('show')
    idMob.classList.toggle('show')
})