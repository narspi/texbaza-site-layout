import Swiper from "swiper";
import { Pagination, Thumbs } from "swiper/modules";

const trambailsMain = document.querySelector(".product-page__trambail-main");
const trambailsNav = document.querySelector(".product-page__trambail-nav");

if (trambailsMain) {
  if (trambailsNav) {
    const nav = new Swiper(trambailsNav, {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(trambailsMain, {
      loop: true,
      spaceBetween: 20,
      modules: [Pagination, Thumbs],
      pagination: {
        el: ".product-page__trambail-pagination",
        bulletClass: "product-page__trambail-bullet",
        bulletActiveClass: "product-page__trambail-bullet--active",
        clickable: true,
        bulletElement: "button",
      },

      thumbs: {
        swiper: nav,
      },
    });
  } else {
    new Swiper(trambailsMain, {
        loop: true,
        spaceBetween: 20,
        modules: [Pagination, Thumbs],
        pagination: {
          el: ".product-page__trambail-pagination",
          bulletClass: "product-page__trambail-bullet",
          bulletActiveClass: "product-page__trambail-bullet--active",
          clickable: true,
          bulletElement: "button",
        },
      });
  }
}
