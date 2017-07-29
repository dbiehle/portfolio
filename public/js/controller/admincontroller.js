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

// This is a test function to see if this could work and be called in routes.js
  adminController.findRepo = function(ctx, next) {
    let singleRepo = app.repos.all(repo => repo.name === ctx.params.name);
    app.repos = singleRepo;
    next();
  }

  module.adminController = adminController;

})(app);
