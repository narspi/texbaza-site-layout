import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const sliderList = document.querySelectorAll(".catalog__section-slider");

sliderList.forEach((slider, index) => {
  const swiper = new Swiper(slider, {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    modules: [Navigation],
    navigation: {
      nextEl: `#section-nav-next${index + 1}`,
      prevEl: `#section-nav-prev${index + 1}`,
    },
  });
  swiper.navigation.nextEl[0].classList.add("btn-init");
  swiper.navigation.prevEl[0].classList.add("btn-init");
});
