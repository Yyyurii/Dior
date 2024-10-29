
const swiperTop = new Swiper('.swiperTop', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: "fade",
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
});

const swiper = new Swiper(".swiperAbout", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.details__item-container').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('details__item-container_active');
  })
})