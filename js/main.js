const responsive={
  0:{
    items:1
  },

  320:{
    items:1
  },

  560:{
    items:2
  },

  960:{
    items:3
  },
}

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
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:responsive,
  });

  //scroll to top
  $('.move-up span').click(function(){
    $('html,body').animate({
      scrollTop:0
    },2000)
  })
 
  //AOS 
  AOS.init();

});