'use strict';

$(document).ready(function() {
  $('.tab').click(function() {
    $('.tab-content, #project-section').show();
    $('.tab-content, #about-section').hide();
    var clickedValue = $(this).attr('data-content');
    $('section[id = "' + clickedValue + '"]').show();
  });

  // $('.main-nav .tab:first').click();
})
