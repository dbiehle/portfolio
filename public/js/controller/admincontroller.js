'use strict';

var app = app || {};

(function(module){

  const adminController = {};
  adminController.index = () => {
    $('.tab-content').hide();
    $('#stats-section').show();
    app.adminView.initAdminPage();
    app.repos.requestRepos(app.repoView.addTheRepos);
  }

  module.adminController = adminController;

})(app);
