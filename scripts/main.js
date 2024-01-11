// horizontal_scroll-carousel
const left_btn = $('#slider_left');
const right_btn = $('#slider_right');
const slider_content = $('.slider__content');

var slider__step = 440;

right_btn.click(function() {
    if (slider_content.width() >= 1296) {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() + slider__step*3)
        }, 700);
    } else if (slider_content.width() >= 879) {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() + slider__step*2)
        }, 700);
    } else {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() + slider__step)
        }, 700);
    }
});

left_btn.click(function() {
    if (slider_content.width() >= 1296) {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() - slider__step*3)
        }, 700);
    } else if (slider_content.width() >= 879) {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() - slider__step*2)
        }, 700);
    } else {
        slider_content.animate({
            scrollLeft : (slider_content.scrollLeft() - slider__step)
        }, 700);
    }
});


// Description achievements carousel
const achievements__left = $('#achievements__left');
const achievements__right = $('#achievements__right');
const achievements__slides = $('.achievements__slide');
const achievements__slide_text = $('.achievements__slide-text ');

var achievementsActiveIndex = 0;

// Инициализация
achievements__slides.each(function(index) {
    if (index !== 0) {
        $(this).addClass('hidden');
    }
});
achievements__slide_text.each(function(index) {
    if (index !== 0) {
        $(this).addClass('hidden');
    }
});

// Управление
achievements__right.click(function() {
    achievementsActiveIndex = nextSlide(achievements__slides, achievementsActiveIndex, achievements__slide_text, 'right');
});
achievements__left.click(function() {
    achievementsActiveIndex = nextSlide(achievements__slides, achievementsActiveIndex, achievements__slide_text, 'left');
});


// Description services carousel
const services__left = $('#services__left');
const services__right = $('#services__right');
const services__slides = $('.services__slide');
const services__slide_text = $('.services__slide-text');

var servicesActiveIndex = 0;

// Инициализация
services__slides.each(function(index) {
    if (index !== 0) {
        $(this).addClass('hidden');
    }
});
services__slide_text.each(function(index) {
    if (index !== 0) {
        $(this).addClass('hidden');
    }
});
// Управление
services__left.click(function() {
    servicesActiveIndex = nextSlide(services__slides, servicesActiveIndex, services__slide_text, 'left');
});

services__right.click(function() {
    servicesActiveIndex = nextSlide(services__slides, servicesActiveIndex, services__slide_text, 'right');
});


// Функция переходов
function nextSlide(slides, index, slide_text, direction) {
    // Скрываем текущий слайд
    slides.eq(index).addClass('hidden');
    slide_text.eq(index).addClass('hidden');
    // Получаем индекс следующего слайда
    if (direction === 'left') {
        if (index === 0) {
            index = slides.length - 1;
        } else {
            index--;
        }
    } else if (direction === 'right') {
        if (index === slides.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }
    // Показываем следующий слайд
    slides.eq(index).removeClass('hidden');
    slide_text.eq(index).removeClass('hidden');

    return(index);
}

//services__content-buttons
const services__content_btns = $('.services__content-btn');
const cards = $('.services__cards__item');

services__content_btns.click(function(index) {
    if (! $(this).hasClass('active')) {
        services__content_btns.toggleClass('active');
        cards.each(function(index) {
            $(this).toggleClass('rotate_card')
            $(this).children('.services__cards__item-content').toggleClass('hidden');
        })
    }
});

// burger menu
const menu_btn = $('.menu-btn');
const menu_block = $('.menu__block');
const close_btn = $('.close-btn');

menu_btn.click(function() {
    menu_block.removeClass('menu__block-not_active');
});

close_btn.click(function() {
    menu_block.addClass('menu__block-not_active');
});