window.addEventListener('DOMContentLoaded', function() {

    let slides = document.querySelectorAll('.slider__item');
    console.log(slides);
    let slider = [];
        
    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i];
    }

    console.log(slider);

});