const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav')[0];
const flexDisplay = document.getElementsByClassName
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
