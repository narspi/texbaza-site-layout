import Swiper from "swiper";
import { Navigation,A11y } from "swiper/modules";

const lizingSlider = document.querySelector(".product-lizing__slider");

if (lizingSlider) {
  const swiper = new Swiper(lizingSlider, {
    slidesPerView: 1,
    loop: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: ".product-lizing__nav-next",
      prevEl: ".product-lizing__nav-prev",
    },
    a11y: {
      focusableElements: "button, a",
    },
  });

  swiper.navigation.nextEl[0].classList.add("btn-init");
  swiper.navigation.prevEl[0].classList.add("btn-init");
}
