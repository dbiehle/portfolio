'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.get('/github/user/repos')
      .then(data => repos.all = data)
      .then(callback);
  };
  module.repos = repos;
})(app);

// .then(function(data){
//   repos.all = data.map(repo => ({
//     name: repo.name,
//     html_url: repo.html_url,
//     description: repo.description,
//     lastUpdated: repo.updated_at
//   }));
