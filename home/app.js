$(document).ready(function(){
  $('.intro').hide();
  $('.differentiation').hide();
  $('.how-to').hide();

  $('.element1').on('click', function(){
    $('.intro').fadeIn(300);
  })
  $('.element2').on('click', function(){
    $('.differentiation').fadeIn(300);
  })
  $('.element3').on('click', function(){
    $('.how-to').fadeIn(300);
  })
})
