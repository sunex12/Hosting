const burger = document.querySelector('.header__burger');

function burgerDisplay() {
    if(window.innerWidth <= 1300) {
        burger.style.display = 'flex';
    } else if (window.innerWidth > 1300) {
        burger.style.display = 'none';
    }
}

window.addEventListener('resize', burgerDisplay)

