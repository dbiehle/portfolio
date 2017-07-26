'use strict';

var app = app || {};

(function(module){
  const repoView = {};

  var template = Handlebars.compile($('#reposTemplate').html());

  repoView.index = function(data) {
    $('#repos-placement').append(template(data));
  }
  module.repoView = repoView;
})(app);
