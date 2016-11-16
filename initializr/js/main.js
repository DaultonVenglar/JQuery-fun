function highlight() {
  $('h1').text('Hello!');
  $('.jumbotron').addClass('highlighted');

}
function unhighlight() {
  $('h1').text('Hello, World!');
  $('.jumbotron').removeClass('highlighted');
}
function hide() {
  $('.jumbotron').fadeOut();
}
function show() {
  $('.jumbotron').slideDown();
}
$(document).ready(function() {
$('h1').on('mouseenter', highlight);
$('.jumbotron').on('mouseenter', highlight);
$('h1').on('mouseleave', unhighlight);
$('.jumbotron').on('mouseleave', unhighlight);
});
