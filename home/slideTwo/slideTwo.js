$(document).ready(function(){
  $('.history').hide();
  $('.adoption').hide();
  $('.steak-holders').hide();

  $('.element4').on('click', function(){
    $('.history').fadeIn(300);
  })
  $('.element5').on('click', function(){
    $('.adoption').fadeIn(300);
  })
  $('.element6').on('click', function(){
    $('.steak-holders').fadeIn(300);
  })
})
