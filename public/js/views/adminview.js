'use strict';

var app = app || {};

(function(module){
  const adminView = {
    initAdminPage: () => {
      const template = Handlebars.compile($('#statsTemplate').html());
      app.Project.numWordsProblem().forEach(stat => {
        $('#stats-placement').append(template(stat));
      });
    }
  }

  // adminView.initAdminPage();

  module.adminView = adminView;

})(app)
