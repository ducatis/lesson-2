window.addEventListener('DOMContentLoaded', function() {

    new Swiper('.slider', {
        //Arrow
        navigation: {
            nextEl: '.slider__arrows-next', //Кнопка next
            prevEl: '.slider__arrows-prev' //Кнопка prev
        },
        
        slidesPerView: 4, //Количество выводимых слайдов
        spaceBetween: 20, //Отступы между слайдами
        loop: true, //Бесконечная прокрутка

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            993: {
                slidesPerView: 2,
            },

            1200: {
                slidesPerView: 3,
            },

            1360: {
                slidesPerView: 4
            }
        },
    });

});