$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('.mynav').addClass('black');
  }else{
    $('.mynav').removeClass('black');
  }
});
