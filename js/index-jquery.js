
// get the height of navigation bar so as to nullify its effect from top
 var navBarHeight = $('.mynav').height();
// -------------------------------------------------------------------------------------------------------
                             // Navigation bar sliding //
// --------------------------------------------------------------------------------------------------------

$(document).ready(function(event) {

  //add exact replica of nav bar before the main navigation bar so it will slide down afterwords
  $("nav").before($(".mynav").clone().addClass("fixed"));
  $(window).on('scroll', function() {

    if ($(window).scrollTop() >= 250) {
      $('.mynav.fixed').addClass('slideDown');

    } else {
      $('.mynav.fixed').removeClass('slideDown ');
    }
    
  });


 
 
// -------------------------------------------------------------------------------------------------------
                             // smooth sliding effects //
// -------------------------------------------------------------------------------------------------------

 $('.inner_current').click(function(event1){

 	//get the al href on click from class
 	var about = $(this).attr('href');
 	$('html, body').animate({scrollTop:$(about).offset().top-navBarHeight-30},800);
 	//prevent the default throw of href
 	event1.preventDefault();

 });

$('.current').click(function(event2){

 	var mainNav = $(this).attr('href');
 	$('html, body').animate({scrollTop:$(mainNav).offset().top-navBarHeight},800);
 	event2.preventDefault();

 });

// -------------------------------------------------------------------------------------------------------
                             // testimonial sliding effect //
// -------------------------------------------------------------------------------------------------------

// $(".testimonial_item").each(function(index,obj){
//    console.log(index);
//    $(obj[index]).animate({left:360}, 1000); 
//    $(obj[index]).delay(2000).animate({left:1300}, 1000);
//    $(obj[index]).animate({left: -600}, 0); 

// });
$(".testimonial").slick({
   slidesToShow: 1,
   infinite:true,
   autoplay:true,
   autoPlaySpeed:2000,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
});
$(".food_company_logos").slick({
   slidesToShow: 4,
   infinite:true,
   autoplay:true,
   autoPlaySpeed:2000,
   slidesToScroll: 1,
   arrows: false,
});


  // var banner = $(".testimonial_item");

  // for (var i=0; i<banner.length; i++) {
  //   var single_testimonial=banner.get(i);
  //   single_testimonial.animate({left:360}, 1000);
  //   single_testimonial.delay(2000).animate({left:1200}, 1000);
  //   single_testimonial.animate({left: -600}, 0); 
  //   console.log(single_testimonial);
  //   // displayMe(banner.get(i));
  // }


 // function displayMe(item){
 //   item.animate({left:360}, 1000);
 //   item.delay(2000).animate({left:1200}, 1000);
 //   item.animate({left: -600}, 0); 
 //  } 
 



}); //END ready function