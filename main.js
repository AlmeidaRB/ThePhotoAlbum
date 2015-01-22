$(document).ready(function() {
  // execute our javascript when the DOM has been loaded


$("a").click(function (event) {
  event.preventDefault();

  var relatedClass = "." + $(this).attr('rel');

  $(this).closest("li").siblings().removeClass("activeNav");
  $(this).closest("li").addClass("activeNav");
  $(relatedClass).siblings().removeClass("active");
  $(relatedClass).addClass('active');
  $("nav").addClass('active');
  $(".enlarge").addClass('active');

  console.log(relatedClass);


});


});
