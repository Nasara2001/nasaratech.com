const slideshowImages = document.querySelectorAll('.slideshow-image');
let currentSlideIndex = 0;

function showNextSlide() {
    slideshowImages.forEach(image => {
        image.style.opacity = 0;
    });

    currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
    slideshowImages[currentSlideIndex].style.opacity = 1;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
