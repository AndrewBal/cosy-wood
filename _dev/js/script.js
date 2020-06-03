"use strict";
$(document).ready(function () {
  var mySwiper = new Swiper('.slider-product .swiper-container', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 'auto', 
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
});

});
