// nav bar
$(document).ready(function(){

  $(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('.mynav').addClass('black');
      $('.mynav').slideDown();
    }else{
      $('.mynav').removeClass('black');

    }
  });
});
