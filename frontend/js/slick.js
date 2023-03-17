$ = jQuery;

$( document ).ready(function() {
  console.log('a');

  $('.place-img-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
 
  $('.place-around-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  

});
