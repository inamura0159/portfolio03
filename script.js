$(function(){
 $('#is_hamburger').on('click', function(){
  $('.bl_hamburger').toggleClass('is_close');
  $('.bl_headerNav').toggleClass('is_active');
    });
});

$(function(){
$(window).on('scroll', function(){
const sliderHeight =$(".ly_mainVisual").height();
if(sliderHeight -30 <$(this).scrollTop()){
$('.el_bar').addClass('is_black');
$('.bl_hamburger_txt').addClass('is_scroll');
}else{
$('.el_bar').removeClass('is_black');
$('.bl_hamburger_txt').removeClass('is_scroll');
}
});
});
