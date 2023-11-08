$(document).ready(function(){  
  
  const $nav = $('.nav');
  const $toggleCollapse = $('.toggle-collapse')


 /* ------------- click event on toggle menu ---------*/
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  })

  //Owl carousel for blob
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next') ]

  });


});