'use strict';

page('/', function(){
  $('.tab-content').hide();
  $('#project-section').show();
})

page('/about', function(){
  $('.tab-content').hide();
  $('#about-section').show();
})

page('/stats', function(){
  $('.tab-content').hide();
  $('#stats-section').show();
})

page();
