// Elements appears when scrolling X pixels
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('.logo').fadeOut(0);
        $('.header-title').fadeOut();
    } else {
        $('.anchor').fadeOut('fast');
        $('.nav-fixed').fadeOut(0);
        $('.logo').fadeIn();
        $('.header-title').fadeIn();
    }
});

// SCROLL BAR APPEARS WHEN SCROLLING UP (AND IT IS NOT IN THE VERY TOP)

$(window).scroll(
  {
    previousTop: 0
  }, 
  function () {
    var y = $(this).scrollTop();
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop && y > 600) {
        $(".nav-fixed").fadeIn();
        $(".anchor").fadeIn();
    } else {
        $(".nav-fixed").fadeOut();
        $(".anchor").fadeOut();
    }
    this.previousTop = currentTop;
});

// SCROLL UP ANCHOR
  
function goToByScroll(id){
     	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

// ABOUT SLIDE

$('.slider-about').click(function() {
  $('.about').slideToggle();
  return false;
});

// CASE 1: UNOBTRUSIVE INTERACTION

$('.case1').click(function() {
  $('.unobtrusive').slideToggle();
  return false;
});

/// VIDEOS

$('#video1-overlay').click(function(){
  var video1 = document.getElementById('video1');
  if (video1.paused) {
    video1.play();
    $('#play1').fadeOut('fast');
  } else {
    video1.pause();
    $('#play1').fadeIn('fast');
  }
});

$('#video2-overlay').click(function(){
  var video2 = document.getElementById('video2');
  if (video2.paused) {
    video2.play();
    $('#play2').fadeOut('fast');
  } else {
    video2.pause();
    $('#play2').fadeIn('fast');
  }
});