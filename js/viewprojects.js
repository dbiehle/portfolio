'use strict';

$(document).ready(function() {
  $('.tab').click(function() {
    $('.tab-content, #project-section').show();
    $('.tab-content, #about-section').hide();
    var clickedValue = $(this).attr('data-content');
    $('section[id = "' + clickedValue + '"]').show();
  });

  $('.icon-menu').click(function() {
    if ($('.main-nav ul').is(':visible')){
      $('.main-nav ul').hide();
    } else {
      $('.main-nav ul').show();
    }
  });

  $('.main-nav .tab:first').click();
})
