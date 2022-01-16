const burgerMenuButton = document.querySelector('.burger-menu')
const closeMenuButton = document.querySelector('.nav-close-menu')
const menu = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-list-link')

burgerMenuButton.addEventListener('click', () => {
    menu.classList.toggle('nav-open')
    document.body.style.overflow = 'hidden'
})
closeMenuButton.addEventListener('click', () => {
    menu.classList.toggle('nav-open')
    document.body.style.overflow = 'visible'
})

const closeMenu = e => {
    if (e.target.classList.contains('nav-list-link')) {
        menu.classList.remove('nav-open')
        document.body.style.overflow = 'visible'
    }
}

navLinks.forEach(link => link.addEventListener('click', closeMenu))
