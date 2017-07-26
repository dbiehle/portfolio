'use strict';

var app = app || {};

(function(module){
  const repoView = {};
  const render = Handlebars.compile($('#reposTemplate').html());
  repoView.addTheRepos = function(data) {
    return $('#repos-placement').append(render(data));
  }
  module.repoView = repoView;
})(app);
