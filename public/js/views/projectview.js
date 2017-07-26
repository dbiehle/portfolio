'use strict';

//Two click handlers when the site loads that show/hide elements from the navigation
// $(document).ready(function() {
//   $('.tab').click(function(event) {
//     event.preventDefault();
//     $('.tab-content, #project-section').show();
//     $('.tab-content, #about-section').hide();
//     var clickedValue = $(this).attr('data-content');
//     $(`section[id = "${clickedValue}"]`).show();
//   });
//
//   $('.icon-menu').click(function() {
//     event.preventDefault();
//     if ($('.main-nav ul').is(':visible')){
//       $('.main-nav ul').hide();
//     } else {
//       $('.main-nav ul').show();
//     }
//   });
//
//   $('.main-nav .tab:first').click();
// })

(function(module){
  const projectView = {
    initProjectPage: () => {
      app.Project.all.forEach(proj => {
        $('#project-section').append(proj.toTheDom())
      });
    }
  }

  module.projectView = projectView;
})(app);
