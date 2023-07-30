const burger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    headerList.classList.toggle('active');
})


const ellipse = document.querySelector('.ready__mane-change span');
const change = document.querySelector('.ready__mane-change div');

change.addEventListener('click', function(event){
    if (event.target === change || event.target === ellipse) {
        ellipse.classList.toggle('active');
    }
})


const basic = document.querySelector('.ready__tariff li:first-child');
const premium = document.querySelector('.ready__tariff li:last-child');


function colorChange(event) {
    if (event.target === premium & !premium.classList.contains('active')) {
        premium.classList.add('active');
        basic.classList.add('active');
    } else if (event.target === basic & basic.classList.contains('active')) {
        premium.classList.remove('active');
        basic.classList.remove('active');
    }
}

basic.addEventListener('click', colorChange);
premium.addEventListener('click', colorChange);


const button = document.querySelector('.awesome__button');

button.addEventListener('mouseenter', function() {
    if (window.innerWidth > 466.98) {
         button.style.background = '#830202';
    }
})

button.addEventListener('mouseleave', function() {
    if (window.innerWidth > 466.98) {
        button.style.background = '#B00000';
    }
})
