let $ = document
const overlay= $.querySelector('.overlay-page')
const iconnavbarmobile = $.querySelector('.bxmenu')
const navbarmobile = $.querySelector('.navbar-Mobile')
const iconback = $.querySelector('.iconback')

// Navbar Mobile 

const OpenNavbarMenu = () => {
    overlay.classList.add('active')
    navbarmobile.classList.add('active')
}

const CloseNavbarMenu = () => {
    navbarmobile.classList.remove('active')
    setTimeout(() => {
        overlay.classList.remove('active')
    }, 300);
}

iconnavbarmobile.addEventListener('click' , OpenNavbarMenu)
iconback.addEventListener('click' , CloseNavbarMenu)

