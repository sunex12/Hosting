const display = document.querySelector('.display');
const services = document.querySelector('.header__logo a:last-child');
const headerListLink = document.querySelectorAll('.header__list a')


function setWidth() {
    if (window.innerWidth <= 1300) {
        services.style.display = 'none';
        display.style.display = 'flex';
        headerListLink.forEach(item => {
            item.style.color = 'white'
        })
    } else if (window.innerWidth > 1300) {
        services.style.display = 'block';
        display.style.display = 'none';
        headerListLink.forEach(item => {
            item.style.color = 'black';
        })
    }
}

window.addEventListener('resize', setWidth)


const burger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    headerList.classList.toggle('active')
})