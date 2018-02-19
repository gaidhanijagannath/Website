$(document).ready(function(e) {
  $("nav").before($(".mynav").clone().addClass("fixed"));
  $(window).on('scroll', function() {

    if ($(window).scrollTop() >= 250) {
      $('.mynav.fixed').addClass('slideDown');

    } else {
      $('.mynav.fixed').removeClass('slideDown');
    }
    
  });
});

var sliderImages = document.querySelectorAll('.slide'),
 	arrowRight = document.querySelector('#arrow-right'), 
 	arrowLeft = document.querySelector('#arrow-left'),
 	dots = document.getElementsByClassName('dot'),
	slideIndex = 0;

// set to normal before every display	
function Reset(){ 
	for (var i=0;i<sliderImages.length;i++) {
		sliderImages[i].style.display='none';
		dots[i].className = dots[i].className.replace(" active", "");

	}
}


//init with start image
function startSlide(){
    Reset();
    sliderImages[0].style.display='block';
}


// show next
function slideRight(){
	Reset();
	sliderImages[slideIndex+1].style.display='block';
	dots[slideIndex+1].className += ' active';
	slideIndex++;

}
// show previous
function slideLeft(){
	Reset();
	sliderImages[slideIndex-1].style.display='block';
	dots[slideIndex-1].className += ' active';
	slideIndex--;

}
//right arrow listener
arrowRight.addEventListener('click',function(){
	if(slideIndex===sliderImages.length -1){
		slideIndex=-1;
	}
	slideRight();
});

//left arrow listener
arrowLeft.addEventListener('click',function(){
	if(slideIndex===0){
		slideIndex = sliderImages.length;
	}
	slideLeft();

});

// call to initialize
startSlide();

//for sldieshow
showSlides();

function showSlides() {
   	Reset();
   	slideIndex++;
    if (slideIndex >= (sliderImages.length)) {slideIndex = 0;}
    sliderImages[slideIndex].style.display = "block";
    //add active class for transformation
    dots[slideIndex].className += " active";
    // slideIndex++;
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}



