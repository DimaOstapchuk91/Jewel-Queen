import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiperContainer = document.querySelector('.reviews-swiper');
const swiperWrapper = document.querySelector('.swiper-wrapper');

let swiper;

const handleResizeScrean = () => {
  const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
  console.log(isDesktop);
  if (isDesktop) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

    swiperWrapper.classList.remove('mobile-style');
    swiperWrapper.classList.add('desktop-style');
  } else {
    if (!swiper) {
      swiperWrapper.classList.remove('desktop-style');
      swiperWrapper.classList.add('mobile-style');

      swiper = new Swiper('.swiper-reviews', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        pagination: {
          el: '.pagination',
          bulletClass: 'pagination-btn',
          bulletActiveClass: 'pagination-btn--active',
        },

        modules: [Navigation, Keyboard, Pagination],

        navigation: {
          nextEl: '.carousel-btn.next',
          prevEl: '.carousel-btn.prev',
        },
      });
    }
  }
};

handleResizeScrean();

window.addEventListener('resize', handleResizeScrean); //не забути видалити
