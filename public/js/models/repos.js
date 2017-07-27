'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubtoken}`
      }
    })
    .then(function(data){
      repos.all = data.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        lastUpdated: repo.updated_at
      }));
      callback();
    })
  };
  module.repos = repos;
})(app);