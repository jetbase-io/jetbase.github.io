$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass('is-active');
    $(".menu").slideToggle(500);
  });
});


