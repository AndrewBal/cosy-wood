"use strict";
$(document).ready(function () {
  var mySwiper = new Swiper(".slider-product .swiper-container", {
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


  var gallerySwiper = new Swiper(".gallery-section .swiper-container", {
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


  var reviewSwiper = new Swiper(".reviews-section .swiper-container", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".reviews-section .swiper-button-next",
      prevEl: ".reviews-section .swiper-button-prev",
    }
  });

  $(".tab-button").click(function () {
    $(".tab-button").removeClass("active");
    $(this).addClass("active");
    $(this).prev().removeClass("active");
    $(".tabs-content").toggleClass("active");
  });


  $("#burher-btn").click(function(){
    $(".burger-menu").show();
  });

  $("#burger-menu-close").click(function(){
    $(".burger-menu").hide();
  });


});

