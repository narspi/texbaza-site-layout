import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const compilationsSlider = document.querySelector('.catalog__compilations-slider');

if (compilationsSlider) {
    const swiper = new Swiper(compilationsSlider, {
        loop: true,
        spaceBetween: 50,
        slidesPerView: 3,
        modules: [Navigation],
        navigation: {
          nextEl: '#compilations-nav-next',
          prevEl: '#compilations-nav-prev',
        },
      });
      swiper.navigation.nextEl[0].classList.add("btn-init");
      swiper.navigation.prevEl[0].classList.add("btn-init");
}