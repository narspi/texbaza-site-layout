import Swiper from "swiper";
import { Navigation, A11y } from 'swiper/modules';

const newsSlider = document.querySelector(".news__slider");

if (newsSlider) {
  new Swiper(newsSlider, {
    slidesPerView: 4,
    spaceBetween: 60,
    loop: true,
    modules: [Navigation,A11y],
    navigation: {
      nextEl: '.news__nav-next',
      prevEl: '.news__nav-prev',
    },
    a11y: {
      focusableElements: 'button, a',
    },
  });
}


