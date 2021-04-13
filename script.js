//--------------Slider-------------//
let swiper = new Swiper('.swiper-container');

// --------------Header Fixed-------------//
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("header");

// Get the offset position of the navbar
let fixed = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= fixed) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}


