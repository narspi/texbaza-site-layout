// import debounce from "lodash.debounce";

const input = document.querySelector('.header__search');
const closeBtn = document.querySelector('.header__form-close');
// const form = document.querySelector('.header__form');

// const chahgeSearchFoo = (event) => {
//     if (!(event instanceof InputEvent )) throw new Error('not valid event value'); 
//     const target = event.target;
//     const value = target.value;
//     // console.log(event);
//     if (value.length > 0) closeBtn.style.display = "block"; else closeBtn.style.display = null;
// }

// const debouced = debounce(chahgeSearchFoo, 250, { 'maxWait': 500 });

// input.addEventListener('input', debouced);

const clickResetFoo = () => {
    input.focus();
}

closeBtn.addEventListener('click', clickResetFoo)
