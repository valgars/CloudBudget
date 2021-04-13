//--------------Slider-------------//
new Swiper('.swiper-container');

// --------------Header Fixed-------------//
window.onscroll = function() {myFunction()};
let header = document.getElementById("header");
let overview = document.getElementById("navOverview")
let fixed = overview.offsetTop;

function myFunction() {
    if (window.pageYOffset >= fixed) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}
//------------------Yak---------------------//



