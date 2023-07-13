const nav = document.getElementById('responsive-nav');

window.onscroll = () => {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    nav.style.top = '0'
    // nav.style.backgroundColor = 'rgb(77 75 75 / 71%)'
  }
  else {
    nav.style.top = '1em'
    // nav.style.backgroundColor = '#ffffff00'
  }

};
// JavaScript code to handle the slideshow functionality
var slides = document.getElementsByClassName("slide");

function showSlide() {
  try {

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }

    slides[0].style.opacity = 1;

    var slideIndex = 0;

    setInterval(function () {
      slides[slideIndex].style.opacity = 0;

      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      slides[slideIndex].style.opacity = 1;
    }, 10000); // Change slide every 10 seconds
  } catch (error) {

  }

}

showSlide();


function toggleMenu() {
  var menuToggle = document.getElementById("menu-toggle");
  var menuItems = document.getElementById("menu-items");
  menuToggle.classList.toggle("active");
  menuItems.style.display = (menuItems.style.display === "block") ? "none" : "block";
}


const icon = document.getElementById('on_mobile');
const nav_items = document.querySelectorAll('#nav_items');
const whenMobile = 900; // make sure this is the same as $mobi_res in variables.scss file
icon.addEventListener('click', () => {
  console.log('clicked')
  if (window.innerWidth < whenMobile) {
    icon.classList.toggle('is-open');
    nav_items.forEach(e => {
      e.classList.toggle('is-open');
    });
  }
});

