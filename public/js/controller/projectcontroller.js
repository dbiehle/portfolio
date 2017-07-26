'use strict';

var app = app || {};

(function(module){

  const projectController = {};
  projectController.index = () => {
    app.Project.getData(app.projectView.initProjectPage);
    $('.tab-content').hide();
    $('#project-section').show();
  }

  module.projectController = projectController;

})(app);
