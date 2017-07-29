'use strict';

var app = app || {};

(function(module){

  const adminController = {};
  adminController.index = () => {
    $('.tab-content').hide();
    $('#stats-section').show();
    app.adminView.initAdminPage();
    app.repos.requestRepos(app.repoView.renderTheRepos);
  }

  adminController.findRepo = function(ctx, next) {
    let singleRepo = app.repos.all(repo => repo.name === ctx.params.name);
    app.repos = singleRepo;
    next();
  }

  module.adminController = adminController;

})(app);
