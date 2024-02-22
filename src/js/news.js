import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

const newsSlider = document.querySelector(".news__slider");

new Swiper(newsSlider, {
  slidesPerView: 4,
  spaceBetween: 60,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.news__nav-next',
    prevEl: '.news__nav-prev',
  },
});
