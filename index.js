$(document).ready(function () {
    $('.toggle-arrow').click(function () {
      $(this).siblings('.content-toggle').slideToggle();
    });
  });

  $('.button').click(function () {
    if ($('.one').hasClass('imred')) {
      $('.one').css('background-color', 'maroon');
      $('.one').css('transform', 'skew(-20deg)');
      $('.one').toggleClass('imred');
      $('.one').toggleClass('immaroon');
    } else if ($('.one').hasClass('immaroon')) {
      $('.one').css('background-color', 'red');
      $('.one').css('transform', 'skew(20deg)');
      $('.one').toggleClass('imred');
      $('.one').toggleClass('immaroon');
    }
    if ($('.two').hasClass('imred')) {
      $('.two').css('background-color', 'maroon');
      $('.two').css('transform', 'skew(-20deg)');
      $('.two').toggleClass('imred');
      $('.two').toggleClass('immaroon');
    } else if ($('.two').hasClass('immaroon')) {
      $('.two').css('background-color', 'red');
      $('.two').css('transform', 'skew(20deg)');
      $('.two').toggleClass('imred');
      $('.two').toggleClass('immaroon');
    }
  })

  console.log("Working correctly!")