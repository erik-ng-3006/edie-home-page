let isToggleOn = false

document.querySelector('.toggle-button').addEventListener('click', () => {
    if (!isToggleOn) {
        document.querySelector('.nav-links').style.display = 'flex'
        document.querySelector('.toggle-button').textContent = 'close'
        document.querySelector('.brand-title ').style.display = 'none';
        isToggleOn = true;
    } else {
        document.querySelector('.nav-links').style.display = null;
        document.querySelector('.toggle-button').textContent = 'menu'
        document.querySelector('.brand-title ').style.display = 'block'
        isToggleOn = false;
    }
})

const navLinks = document.querySelectorAll('.nav-link');

for (navLink of navLinks) {
    navLink.addEventListener('click', () => {
        document.querySelector('.nav-links').style.display = null;
        document.querySelector('.toggle-button').textContent = 'menu'
        document.querySelector('.brand-title ').style.display = 'block'
        isToggleOn = false;
    })
}