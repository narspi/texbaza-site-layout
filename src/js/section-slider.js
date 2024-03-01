import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

const sliderList = document.querySelectorAll(".catalog__section-slider");
const productSliderElems = document.querySelectorAll(".product__slider");

sliderList.forEach((slider, index) => {
  const swiper = new Swiper(slider, {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: `#section-nav-next${index + 1}`,
      prevEl: `#section-nav-prev${index + 1}`,
    },
    a11y: {
      focusableElements: "button, a",
    },
  });
  swiper.navigation.nextEl[0].classList.add("btn-init");
  swiper.navigation.prevEl[0].classList.add("btn-init");
});

productSliderElems.forEach((slider, index) => {
  const swiper = new Swiper(slider, {
    loop: true,
    effect: "fade",
    modules: [Pagination, EffectFade, Autoplay, A11y],
    fadeEffect: {
      crossFade: true,
    },
    autoplay: true,
    pagination: {
      el: ".product__pagination",
      clickable: true,
      modifierClass: "product__pagination",
      bulletClass: "product__pagination-bullet",
      bulletActiveClass: "product__pagination-bullet--active",
      bulletElement: "button"
    },
    a11y: {
      focusableElements: "button, a",
    },
  });
});
