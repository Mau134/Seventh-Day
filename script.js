const nav = document.getElementById('mynav');

window.onscroll = () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.style.backgroundColor = '#7bb2c2'
    }
    else {
        nav.style.backgroundColor = '#ffffff00'
    }

};
// JavaScript code to handle the slideshow functionality
var slides = document.getElementsByClassName("slide");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  
  slides[0].style.opacity = 1;
  
  var slideIndex = 0;
  
  setInterval(function() {
    slides[slideIndex].style.opacity = 0;
    
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    
    slides[slideIndex].style.opacity = 1;
  }, 10000); // Change slide every 10 seconds
}

showSlide();
