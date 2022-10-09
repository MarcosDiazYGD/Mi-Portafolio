const imgMenu = document.getElementById("img-menu")
const navbar = document.getElementById("navbar")
const closeMenu = document.getElementById("close-menu")

imgMenu.addEventListener('click', e => {
    navbar.classList.toggle("open-menu")
})

closeMenu.addEventListener('click', e => {
    navbar.classList.remove("open-menu")

})