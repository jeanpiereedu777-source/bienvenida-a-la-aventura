$(document).ready(function () {

  $('.no').on("click", function () {
    $('#f1').hide();
    $('#f2').css('display', 'flex');
  });

  $('.weno').on("click", function () {
    $('#f2').hide();
    $('#f1').css('display', 'flex');
  });

  $('.si').on("click", function () {
    $('#f1').hide();
    $('#f3').css('display', 'flex');
  });

  $('.dale').on("click", function () {
    $('#f3').hide();
    $('#f4').css('display', 'flex');
  });

  $('.rega').on("click", function () {
    $('#f4').hide();
    $('#f5').css('display', 'flex');
  });

  $('.ojo').on("click", function () {
    $('#f5').hide();
    $('#f6').css('display', 'flex');
  });

  $('.afi').on("click", function () {
    $('#f6').hide();
    $('#f7').css('display', 'flex');
    $('#f8').css('display', 'flex');
  });

  $('.salu').on("click", function () {
    $('#f8').hide();
    $('#f9').css('display', 'flex');
  });

  $('.copy').on("click", function () {
    $('#f9').hide();
    $('#f10').css('display', 'flex');
    $('#f11').css('display', 'flex');
  });

  $('span.go').on("click", function () {
    $('#f13').hide();
    $('#f14').css('display', 'block');
  });

  $('.ca1').on("click", function () {
    $('#f12').css('display', 'flex');
    $('#f13').css('display', 'block');
  });

  $('.ca3').on("click", function () {
    $('#f15').css('display', 'block');
    $('#f16').css('display', 'flex');
  });

  $('.ca2').on("click", function () {
    $('#f18').css('display', 'block');
    $('#f19').css('display', 'flex');
  });

  $('.carta').on("click", function () {
    $('#f12').hide();
  });

  $('.anillo').on("click", function () {
    $('#f16').hide();
    $('#f17').css('display', 'flex');
  });

  $('.marry').on("click", function () {
    $('#f15').hide();
    $('#f17').hide();
  });

  $('.meme').on("click", function () {
    $('#f19').hide();
    $('#f20').css('display', 'flex');
  });

  $('.meme2').on("click", function () {
    $('#f20').hide();
    $('#f21').css('display', 'flex');
  });

  $('.yes').on("click", function () {
    $('#f21').hide();
    $('#f22').css('display', 'flex');
  });

});

$('.final-next').on("click", function(){
  $('#f22').hide();
  $('#f23').css('display', 'flex');
});

$('.valen-yes, .valen-no').on("click", function(){
  $('#f23').hide();
  $('#f24').css('display', 'flex');
});