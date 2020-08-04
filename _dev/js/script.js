"use strict";
$(document).ready(function () {

  

  $(".btn-password-change").on("click", function(){
 
    $(".password-change-group").slideToggle();
   
  }),
   
   mySwiper = new Swiper(".slider-product .swiper-container", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    breakpoint: {
      768: {
        slidesPerView: 1,
      }
    }
  });


   gallerySwiper = new Swiper(".gallery-section .swiper-container", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".gallery-section .swiper-button-next",
      prevEl: ".gallery-section .swiper-button-prev",
    },
    pagination: {
      el: ".gallery-section .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });


   reviewSwiper = new Swiper(".reviews-section .swiper-container", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".reviews-section .swiper-button-next",
      prevEl: ".reviews-section .swiper-button-prev",
    }
  });



   productSwiper = new Swiper(".product-container .swiper-container", {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".product-container .swiper-button-next",
      prevEl: ".product-container .swiper-button-prev",
    },
    pagination: {
      el: ".product-container .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });



});

