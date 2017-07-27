'use strict';

var app = app || {};

(function(module){
  const repoView = {};
  const render = Handlebars.compile($('#reposTemplate').html());
  repoView.renderTheRepos = () => {
    module.repos.all.forEach(data => {
      $('#repos-placement').append(render(data));
    })
  }

  module.repoView = repoView;

})(app);
