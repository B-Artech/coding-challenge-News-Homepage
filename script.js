const nav = document.querySelector('.nav__mobile')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const navAll = document.querySelectorAll('.nav__link')


const navOpen = () => {
    nav.classList.add('nav-active')
    burger.classList.toggle('hide')
}
const navClose = () => {
    nav.classList.remove('nav-active')
    burger.classList.toggle('hide')
}

navAll.forEach(nav => {
    nav.addEventListener('click', navClose)
})


burger.addEventListener('click', navOpen)
close.addEventListener('click', navClose)