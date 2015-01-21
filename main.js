$(document).ready(function() {
  // execute our javascript when the DOM has been loaded


  //nav links
  var $home = $('nav a').eq(0);
  var $post1 = $('nav a').eq(1);
  var $post2 = $('nav a').eq(2);
  var $post3 = $('nav a').eq(3);
  var $post4 = $('nav a').eq(4);
  var $post5 = $('nav a').eq(5);
  var $post6 = $('nav a').eq(6);

  //event bindings for each click of the header navs
  $home.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.home').siblings().removeClass("active");
    $('.home').addClass('active');

  });


  $post1.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post1').siblings().removeClass("active");
    $('.post1').addClass('active');

  });

  $post2.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post2').siblings().removeClass("active");
    $('.post2').addClass('active');

  });

  $post3.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post3').siblings().removeClass("active");
    $('.post3').addClass('active');

  });

  $post4.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post4').siblings().removeClass("active");
    $('.post4').addClass('active');

  });

  $post5.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post5').siblings().removeClass("active");
    $('.post5').addClass('active');

  });

  $post6.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.post6').siblings().removeClass("active");
    $('.post6').addClass('active');

  });

});
