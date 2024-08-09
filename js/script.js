$(document).ready(function(){
  $('.layout-menu-toggle').on('click', function(){
    $('.left').toggleClass('expand');
    $('.overlay').toggleClass('layout-overlay');
    return false;
  });
});