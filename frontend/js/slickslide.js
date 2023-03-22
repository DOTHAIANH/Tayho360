// console.log('a');

// const $ = jQuery ;

$(document).ready(function () {

    $('.in-box-event-home').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
    });
});

$(document).ready(function () {

    $('.slide-time-event').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: false,
        speed: 500,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-caret-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-caret-right"></i></button>`
    });

});

$(document).ready(function () {

    $('.box-slide-tth').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidetsToScroll: 1,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
    });

});

$('.box-slide-tth').on('init', function(event, slick) {
    $('.slick-slide').removeClass('custom-class');
    var firstSlide = $(slick.$slides[0]);
    // var secondSlide = $(slick.$slides[1]);
    // var thirdSlide = $(slick.$slides[2]);
    // var fifthSlide = $(slick.$slides[3]);
    firstSlide.addClass('custom-class');
    // secondSlide.addClass('custom-class');
    // thirdSlide.addClass('custom-class');
    // fifthSlide.addClass('custom-class');
  });

$(document).ready(function () {

    $('.slide-vn360').slick({
        centerMode: true,
        slidesToShow: 3,
        infinite: false,
        speed: 500,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
    });
    
});


