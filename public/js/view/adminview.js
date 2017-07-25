'use strict';

var app = app || {};

(function(module){
  const adminView = {
    initAdminPage: () => {
      let template = Handlebars.compile($('#statsTemplate').html());
      app.Project.numWordsProblem().forEach(stat => {
        $('#stats-placement').append(template(stat))
      });
    }
  }

  app.Project.loadAll(adminView.initAdminPage);

  module.adminView = adminView;

})(app)
