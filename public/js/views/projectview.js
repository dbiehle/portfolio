'use strict';


(function(module){

  $('.icon-menu').click(function() {
    event.preventDefault();
    if ($('.main-nav ul').is(':visible')){
      $('.main-nav ul').hide();
    } else {
      $('.main-nav ul').show();
    }
  });

  $('.main-nav .tab:first').click();

  const projectView = {
    initProjectPage: () => {
      $('#project-section').empty();
      app.Project.all.forEach(proj => {
        $('#project-section').append(proj.toTheDom())
      });
    }
  }

  module.projectView = projectView;
})(app);
