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



  var productSwiper = new Swiper(".product-container .swiper-container", {
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

  $(".open-search-btn").click(function(){
    $("#header-search-bar").addClass('open');
  });

  $("#close-search-btn").click(function(){  
    $(this).parents(".header-main__search").removeClass("open");
  });



  $(".category-filter__group-title").click(function(){
    $(this).next(".category-filter__group-list").slideToggle();
    $(this).parent(".category-filter__group").toggleClass("close");
  });


  $(".product-info-item__title").click(function(){
    $(this).next(".product-info-item__content").slideToggle();
    $(this).parent(".product-info-item").toggleClass("close");
  });


  $(".category-filter__footer .btn").click(function(){
    $('input[type = "checkbox"]').prop('checked', false);
    $('input[type = "radio"]').prop('checked', false);
    
  });


  $("#product").on("click", ".toggle-group__button", function () {

    var e = $(this).closest(".toggle-group__item");
    console.log(e.index());
    e.removeClass("active"),
      e.index()
        ? e.prev().toggleClass("active")
        : e.next().toggleClass("active");
  });

});

