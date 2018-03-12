// -------------------------------------------------------------------------------------------------------
                             // BACKGROUND SLIDE SHOW //
// --------------------------------------------------------------------------------------------------------

var sliderImages = document.querySelectorAll('.slide'),
 	arrowRight = document.querySelector('#arrow-right'), 
 	arrowLeft = document.querySelector('#arrow-left'),
 	dots = document.getElementsByClassName('dot'),
 	testimonial_text = document.querySelectorAll('.testimonial_item'),
	slideIndex = -1,
	testimonialIndex =-1;

// set to normal before every display	
function Reset(){ 
	for (var i=0;i<sliderImages.length;i++) {
		sliderImages[i].style.display='none';
		dots[i].className = dots[i].className.replace(" active", "");

	}
}


// function testimonialReset(){
// 	for (var i = testimonial_text.length - 1; i >= 0; i--) {
// 		testimonial_text[i].style.display='none';
// 	}
// }
// function startTestimonialSlide(){
// 	testimonialReset();
// 	testimonial_text[0].style.display='block';

// }

// function showTestimonialSlides() {
//    	testimonialReset();
//    	testimonialIndex++;
//     if (testimonialIndex >= (testimonial_text.length)) {testimonialIndex = 0;}
//     testimonial_text[testimonialIndex].style.display='block';
//     testimonial_text[testimonialIndex].className += ' animated slideInRight';
//     // testimonial_text[testimonialIndex].className += ' slideOutLeft';
//     // console.log(testimonial_text[testimonialIndex].className);
//     setTimeout(function(){
//     	 testimonial_text[testimonialIndex].className += ' animated slideOutLeft';
//     	 setTimeout(showTestimonialSlides, 2000); // Change image every 4 seconds

//     },2000);
// }


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
// startTestimonialSlide();

//for sldieshow
showSlides();
// showTestimonialSlides();

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