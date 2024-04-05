// For CS50x slideshow
var cs50xSlideIndex = 0;
showSlides(cs50xSlideIndex, 'cs50x-slideshow');

// For Web Developer slideshow
var webDevSlideIndex = 0;
showSlides(webDevSlideIndex, 'web-dev-slideshow');

// For Robotics NTCI Developer slideshow
var webDevSlideIndex = 0;
showSlides(webDevSlideIndex, 'robotics-ntci-slideshow');

// For legends Developer slideshow
var webDevSlideIndex = 0;
showSlides(webDevSlideIndex, 'legends-slideshow');

function plusSlides(n, slideshowClass) {
    if (slideshowClass === 'cs50x-slideshow') {
        cs50xSlideIndex += n;
        showSlides(cs50xSlideIndex, slideshowClass);
    } else if (slideshowClass === 'web-dev-slideshow') {
        webDevSlideIndex += n;
        showSlides(webDevSlideIndex, slideshowClass);
    } else if (slideshowClass === 'robotics-ntci-slideshow') {
        webDevSlideIndex += n;
        showSlides(webDevSlideIndex, slideshowClass);
    } else if (slideshowClass === 'legends-slideshow') {
        webDevSlideIndex += n;
        showSlides(webDevSlideIndex, slideshowClass);
    }
}

function showSlides(n, slideshowClass) {
    var i;
    var slides = document.querySelectorAll('.' + slideshowClass + ' .mySlides');
    n = (n + slides.length) % slides.length; // Ensure index stays within bounds
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[n].style.display = "block";  
}


