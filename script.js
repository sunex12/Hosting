const burger = document.querySelector('.header__burger');
// const redUnderline = document.querySelector('.red-underline');
const headerList = document.querySelectorAll('.header__list a');

function burgerDisplay() {
    if(window.innerWidth <= 1300) {
        burger.style.display = 'flex';
        redUnderline.style.display = 'none';
        headerList.forEach(element => {
            element.style.color = 'red';
        });
    } else if (window.innerWidth > 1300) {
        burger.style.display = 'none';
        redUnderline.style.display = 'inline-block';
        headerList.forEach(element => {
            element.style.color = 'black';
        });
    }
}

window.addEventListener('resize', burgerDisplay)

