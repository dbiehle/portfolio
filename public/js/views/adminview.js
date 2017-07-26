'use strict';

var app = app || {};

(function(module){
  const adminView = {
    initAdminPage: () => {
      const template = Handlebars.compile($('#statsTemplate').html());
      app.Project.numWordsProblemSolution().forEach(stat => {
        $('#stats-placement').append(template(stat));
      });
    }
  }

  module.adminView = adminView;

})(app)
