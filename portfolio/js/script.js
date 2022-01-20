import i18Obj from './translate.js'

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

//translation
const languagesBtns = document.querySelectorAll('.languages')
const languagesBtn = document.querySelectorAll('.language')
const contactEmail = document.querySelector('.contacts-email')
const contactPhone = document.querySelector('.contacts-phone')
const contactMessage = document.querySelector('.contacts-message')
const skillsTitle = document.querySelector('.skills-title')
const portfolioTitle = document.querySelector('.portfolio-title')
const videoTitle = document.querySelector('.video-title')
const priceTitle = document.querySelector('.price-title')

const getTranslate = (e, obj) => {
    languagesBtn.forEach(btn => {
        if (btn.classList.contains('language-active')) {
            btn.classList.remove('language-active')
        }
    })
    if (e.target.classList.contains('languages-eng')) {
        document.querySelectorAll('[data-i18n]').forEach(node => node.textContent = obj.en[node.dataset.i18n])
        e.target.classList.add('language-active')
        contactEmail.placeholder = 'E-mail'
        contactPhone.placeholder = 'Phone'
        contactMessage.placeholder = 'Message'
        skillsTitle.classList.remove('skills-title-translate')
        portfolioTitle.classList.remove('portfolio-title-translate')
        videoTitle.classList.remove('video-title-translate')
        priceTitle.classList.remove('price-title-translate')
    } else {
        document.querySelectorAll('[data-i18n]').forEach(node => node.textContent = obj.ru[node.dataset.i18n])
        e.target.classList.add('language-active')
        contactEmail.placeholder = 'Электронная почта'
        contactPhone.placeholder = 'Телефон'
        contactMessage.placeholder = 'Оставить сообщение'
        skillsTitle.classList.add('skills-title-translate')
        portfolioTitle.classList.add('portfolio-title-translate')
        videoTitle.classList.add('video-title-translate')
        priceTitle.classList.add('price-title-translate')
    }
}

languagesBtns.forEach(btn => btn.addEventListener('click', e => getTranslate(e, i18Obj)))

// theme
const logo = document.querySelector('.logo')
const themeBtn = document.querySelector('.theme-button')
const containers = document.querySelectorAll('.container')
const buttonWrapper = document.querySelectorAll('.button-wrapper')
const sectionTitle = document.querySelectorAll('.section-title')
const socialLinks = document.querySelectorAll('.footer-social-link')
const headerContainer = document.querySelector('.header-container')
const heroContainer = document.querySelector('.hero-container')
const contactsConatainer = document.querySelector('.contacts-container')

const changeContainerBackgroundImgDarkTheme = () => {
    if (document.documentElement.clientWidth <= 768) {
        headerContainer.style.backgroundImage = "url('./assets/img/image-bg-tablet.jpg')"
        heroContainer.style.backgroundImage = "url('./assets/img/image-bg-tablet.jpg')"
    } else if (document.documentElement.clientWidth > 768) {
        headerContainer.style.backgroundImage = "url('./assets/img/image-bg.jpg')"
        heroContainer.style.backgroundImage = "url('./assets/img/image-bg.jpg')"
    }
    contactsConatainer.style.backgroundImage = "url('./assets/img/contacts-bg.jpg')"
}

const changeContainerBackgroundImgLightTheme = () => {
    if (document.documentElement.clientWidth <= 768) {
        headerContainer.style.backgroundImage = "url('./assets/img/image-bg-tablet-light.jpg')"
        heroContainer.style.backgroundImage = "url('./assets/img/image-bg-tablet-light.jpg')"
    } else if (document.documentElement.clientWidth > 768) {
        headerContainer.style.backgroundImage = "url('./assets/img/image-bg-light.jpg')"
        heroContainer.style.backgroundImage = "url('./assets/img/image-bg-light.jpg')"
    }
    contactsConatainer.style.backgroundImage = "url('./assets/img/contacts-bg-light.jpg')"
}

const changeBackgroundSvgDarkTheme = () => {
    logo.style.backgroundImage = "url('./assets/svg/logo.svg')"
    themeBtn.style.backgroundImage = "url('./assets/svg/sun.svg')"
    burgerMenuButton.style.backgroundImage = "url('./assets/svg/burger.svg')"
    closeMenuButton.style.backgroundImage = "url('./assets/svg/close.svg')"
    socialLinks.forEach((link, i) => link.style.backgroundImage = `url('./assets/svg/social/${i + 1}.svg')`)
}

const changeBackgroundSvgLightTheme = () => {
    logo.style.backgroundImage = "url('./assets/svg/logo-black.svg')"
    themeBtn.style.backgroundImage = "url('./assets/svg/moon-light.svg')"
    burgerMenuButton.style.backgroundImage = "url('./assets/svg/burger-black.svg')"
    closeMenuButton.style.backgroundImage = "url('./assets/svg/close-black.svg')"
    socialLinks.forEach((link, i) => link.style.backgroundImage = `url('./assets/svg/social/${i + 1}-dark.svg')`)
}

const changeStylesDarkTheme = () => {
    containers.forEach(container => container.classList.remove('theme-light-font'))
    portfolioBtn.forEach(btn => btn.classList.remove('button-active-light'))
    buttonWrapper.forEach(item => item.style.backgroundColor = '#000000')
    sectionTitle.forEach(item => item.classList.remove('section-title-light'))
    document.body.style.backgroundColor = '#000000'
}

const changeStylesLightTheme = () => {
    containers.forEach(container => container.classList.add('theme-light-font'))
    portfolioBtn.forEach(btn => btn.classList.add('button-active-light'))
    buttonWrapper.forEach(item => item.style.backgroundColor = '#BDAE82')
    sectionTitle.forEach(item => item.classList.add('section-title-light'))
    document.body.style.backgroundColor = '#FFFFFF'
}

const setPropertyDarkTheme = () => {
    document.documentElement.style.setProperty('--background-color-button', 'transparent')
    document.documentElement.style.setProperty('--text-color-button-transparent', '#BDAE82')
    document.documentElement.style.setProperty('--background-color-theme', '#000000')
    document.documentElement.style.setProperty('--font-color-theme', '#FFFFFF')
    document.documentElement.style.setProperty('--text-color-title', '#BDAE82')
    document.documentElement.style.setProperty('--text-color-theme', '#BDAE82')
    document.documentElement.style.setProperty('--text-color-button-gold', '#FFFFFF')
    document.documentElement.style.setProperty('--background-color-form', 'rgba(0, 0, 0, 0.5)')
}

const setPropertyLightTheme = () => {
    document.documentElement.style.setProperty('--background-color-button', '#BDAE82')
    document.documentElement.style.setProperty('--text-color-button-transparent', '#1C1C1C')
    document.documentElement.style.setProperty('--background-color-theme', '#FFFFFF')
    document.documentElement.style.setProperty('--font-color-theme', '#1C1C1C')
    document.documentElement.style.setProperty('--text-color-title', '#1C1C1C')
    document.documentElement.style.setProperty('--text-color-theme', '#FFFFFF')
    document.documentElement.style.setProperty('--text-color-button-gold', '#BDAE82')
    document.documentElement.style.setProperty('--background-color-form', 'rgba(255, 255, 255, 0.5)')
}

const changeTheme = () => {
    if (themeBtn.classList.contains('theme-light')) {
        themeBtn.classList.remove('theme-light')
        changeBackgroundSvgDarkTheme()
        setPropertyDarkTheme()
        changeContainerBackgroundImgDarkTheme()
        changeStylesDarkTheme()
    } else {
        themeBtn.classList.add('theme-light')
        changeBackgroundSvgLightTheme()
        setPropertyLightTheme()
        changeContainerBackgroundImgLightTheme()
        changeStylesLightTheme()
    }
}

themeBtn.addEventListener('click', changeTheme)
