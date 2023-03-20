// console.log('a');

// const $ = jQuery ;

$(document).ready(function () {

    $('.in-box-event-home').slick({
        dots: false,
        infinite: true,
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
        speed: 500,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`
    });

});


