
$(document).ready(function(e) {
  $("nav").before($(".mynav").clone().addClass("fixed"));
  $(window).on('scroll', function() {

    if ($(window).scrollTop()>=200) {
      $('.mynav').addClass('black slideDown');
    } else {
      $('.mynav').removeClass('black slideDown');
    }
  });
});
