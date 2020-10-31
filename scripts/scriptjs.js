$(function(){

  $('.slider__inner').slick({
    arrows : false,
    dots : true,
  });

  $('.works__inner').slick({
    infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	prevArrow: '<button class="slick-arrow slick-prev"><img src="img/works/arowleft.svg" alt=""></button>',
  	nextArrow: '<button class="slick-arrow slick-next"><img src="img/works/arowright.svg" alt=""></button>',
  });

});