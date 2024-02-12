// import "../../node_modules/focus-visible/dist/focus-visible.min.js";

const input = document.querySelector('.header__search');
const closeBtn = document.querySelector('.header__form-close');
const form = document.querySelector('.header__form');

const chahgeSearchFoo = (event) => {
    const target = event.target;
    console.log(target.value)
}

input.addEventListener('input', chahgeSearchFoo);
