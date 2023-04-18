import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './home.css';

import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import slide5 from './images/slide5.jpg';
import slide6 from './images/slide6.jpg';
import slide7 from './images/slide7.jpg';

const createHome = () => {
  const homeTab = document.querySelector('.con');
  

  // Create the HTML structure for the Swiper slider
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const swiperSlides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
  ];

  swiperSlides.forEach((slideContent) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const slideImg = document.createElement('img');
    slideImg.src = slideContent;

    slide.appendChild(slideImg);
    swiperWrapper.appendChild(slide);
  });

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');

  const swiperButtonPrev = document.createElement('div');
  swiperButtonPrev.classList.add('swiper-button-prev');

  const swiperButtonNext = document.createElement('div');
  swiperButtonNext.classList.add('swiper-button-next');

 

  swiperContainer.appendChild(swiperWrapper);
  swiperContainer.appendChild(swiperPagination);
  swiperContainer.appendChild(swiperButtonPrev);
  swiperContainer.appendChild(swiperButtonNext);
 

  homeTab.appendChild(swiperContainer);

  // Instantiate a new Swiper object
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    modules: [Navigation, Pagination],
  });

  // Initialize the Swiper object
  swiper.init();
};

export { createHome };