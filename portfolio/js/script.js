// menu
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


// portfolio
const portfolioBtns = document.querySelectorAll('.portfolio-buttons')
const portfolioBtn = document.querySelectorAll('.portfolio-button')
const portfolioImages = document.querySelectorAll('.portfolio-image')

const preloadImages = () => {
    const seasons = ['winter', 'spring', 'summer', 'autumn']

    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image()
            img.src = `./assets/img/${season}/${i}.jpg`
        }
    })
}

preloadImages()

const changeImages = e => {
    if (e.target.classList.contains('portfolio-button')) {
        portfolioImages.forEach((img, i) => img.src = `./assets/img/${e.target.dataset.season}/${i + 1}.jpg`)
    }
    portfolioBtn.forEach(btn => {
        if (btn.classList.contains('button-gold')) {
            btn.classList.remove('button-gold')
            btn.classList.add('button-transparent')
        }
    })
    e.target.classList.remove('button-transparent')
    e.target.classList.add('button-gold')
}

portfolioBtns.forEach(btn => btn.addEventListener('click', changeImages))
