const navbar = document.getElementById('navbar')
const navbarTitle = document.getElementById('navbar-title')
const navMenu = document.getElementById('navMenu')
const navbarBurgerButtom = document.getElementById('navbarBurgerButtom')
const pageSections = {
    'home': document.getElementById('home'),
    'about': document.getElementById('about'),
    'gallery': document.getElementById('gallery'),
    'contact': document.getElementById('contact')
}
const pageSectionsTitles = {
    'home': document.getElementById('home-title'),
    'about': document.getElementById('about-title'),
    'gallery': document.getElementById('gallery-title'),
    'contact': document.getElementById('contact-title')
}

const changeNavbarColor = (navbarClassName) => {
    const navbarPosition = navbar.getBoundingClientRect()
    const homePosition = pageSections.home.getBoundingClientRect()
    const aboutPosition = pageSections.about.getBoundingClientRect()
    const galleryPosition = pageSections.gallery.getBoundingClientRect()
    const contactPosition = pageSections.contact.getBoundingClientRect()

    navbar.classList.add('background-transparent')

    if(navbarPosition.y >= homePosition.y && navbarPosition.y <= homePosition.height) {
        navbar.className = navbarClassName
        navbar.classList.add('background-1')
        navbarTitle.innerHTML = pageSectionsTitles.home.innerHTML
    } 

    if(navbarPosition.y >= aboutPosition.y && navbarPosition.y <= aboutPosition.height) {
        navbar.className = navbarClassName
        navbar.classList.add('background-2')
        navbarTitle.innerHTML = pageSectionsTitles.about.innerHTML
    }

    if(navbarPosition.y >= galleryPosition.y && navbarPosition.y <= galleryPosition.height) {
        navbar.className = navbarClassName
        navbar.classList.add('background-3')
        navbarTitle.innerHTML = pageSectionsTitles.gallery.innerHTML
    }

    if(navbarPosition.y >= contactPosition.y && navbarPosition.y <= contactPosition.height) {
        navbar.className = navbarClassName
        navbar.classList.add('background-4')
        navbarTitle.innerHTML = pageSectionsTitles.contact.innerHTML
    }
}

let lastScroll = 0
const navbarScrollsTopOrBottom = () => {
    const windowYPosition = window.pageYOffset

    if(windowYPosition < lastScroll) {
        const navbarClassName = 'navbar is-fixed-top'
        navbar.className = navbarClassName
        changeNavbarColor(navbarClassName)
        navMenu.classList.remove('is-active')
        navbarBurgerButtom.classList.remove('is-active')
        lastScroll = windowYPosition
    } else if(windowYPosition >= lastScroll){
        navbar.classList.remove('is-fixed-top')
        lastScroll = windowYPosition
    }

    if(lastScroll == window.pageYOffset && linkClicked) {
        console.warn('Retirado o Fixed Top')
        navbar.classList.remove('is-fixed-top')
    }
}


window.addEventListener("scroll", navbarScrollsTopOrBottom)