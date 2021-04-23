window.addEventListener('DOMContentLoaded', function() {

    new Swiper('.slider', {
        //Arrow
        navigation: {
            nextEl: '.slider__next', //Кнопка next
            prevEl: '.slider__prev' //Кнопка prev
        },
        
        slidesPerView: 4, //Количество выводимых слайдов
        spaceBetween: 20, //Отступы между слайдами
        loop: true, //Бесконечная прокрутка
    });

});