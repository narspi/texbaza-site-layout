import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from "swiper/modules";
const noveltySlider = document.querySelector(".product-novelty__slider");
const noventyPrevieFadeSliders = document.querySelectorAll('.product-novelty__fade');

if (noveltySlider) {
  const swiper = new Swiper(noveltySlider, {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: ".product-novelty__nav-next",
      prevEl: ".product-novelty__nav-prev",
    },
  });

  swiper.navigation.nextEl[0].classList.add("btn-init");
  swiper.navigation.prevEl[0].classList.add("btn-init");


  noventyPrevieFadeSliders.forEach((sliderFadeElem,index) => {
    const swiperFade = new Swiper(sliderFadeElem,{
      loop: true,
      effect: "fade",
      modules: [Pagination, EffectFade, Autoplay, A11y],
      fadeEffect: {
        crossFade: true,
      },
      autoplay: true,
      pagination: {
        el: ".product-novelty__pagination",
        clickable: true,
        modifierClass: "product-novelty__pagination",
        bulletClass: "product-novelty__pagination-bullet",
        bulletActiveClass: "product-novelty__pagination-bullet--active",
        bulletElement: "button"
      },
    })
  });
}
