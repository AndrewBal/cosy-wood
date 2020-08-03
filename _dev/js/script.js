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
  }),
  $(".counter__button").on("click", function () {
    var e = $(this).parent().find(".counter__value"),
      t = Number(e.val());
    $(this).hasClass("counter__decrement") ? 1 < t && e.val(--t) : e.val(++t),
      console.log("product QUANTITY=" + t);
  }),
  $(".cart-product-remove").on("click", function () {
    1 < $(".cart-item").length
      ? $(this)
          .closest(".cart-item")
          .fadeOut(300, function () {
            $(this).remove();
          })
      : ($(this)
          .closest(".cart-item")
          .fadeOut(300, function () {
            $(this).remove();
          }),
        $(".cart-step-1-form").hide(),
        $(".cart-empty").fadeIn());
  }),


  $("#add-to-cart").on("click", function () {
    $.fancybox.open({
      src: "#product-in-cart-popup",
      type: "inline",
      opts: {
        touch: !1,
        afterShow: function () {
          setTimeout(function () {
            $.fancybox.close();
          }, 3e3);
        },
      },
    });
  }),
  $(".select-language").on("click", function () {
    $.fancybox.open({
      src: "#language-popup",
      type: "inline",
      opts: { touch: { vertical: !1 } },
    });
  }),


$("#delivery-2").on("click", function(){
  if(document.getElementById("delivery-2").checked == true) {
    $(".nova-poshta-form").show();
  }
});
$("#delivery-1").on("click", function(){
  $(".nova-poshta-form").hide();
});
  

$(".btn-password-change").on("click", function(){
  $(".password-change-group").slideToggle();
}),




  // function m() {
  //   return 700 <= $(".product-info").height();
  // }

  // if (window.matchMedia("(min-width: 1200px)").matches) {
  //   var u = $(".product-action__main"); 
  //   $(".sticky-rails").height($(".product-info").height()),
  //       $(window).on("scroll", function () {
  //         $(window).scrollTop() >= u.offset().top - 120 && m()    
  //           ? u.addClass("transformation")
  //           : u.removeClass("transformation");
  //       });
  // }  

 

  // Execute a function when the user releases a key on the keyboard
  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      console.log("sd ")
      document.location.href = "http://www.site.ru";
    }
  });

  window.onresize = function(event) {

   
     if ($(window).width() < 1200) {
           $(".product-action__main").addClass("transformation")
     } else {

     }
    }


});

