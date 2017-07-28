'use strict';

var app = app || {};

(function(module){
  const repos = {};

  // repos.all = [];
// repos.all = data.map(repo => ({

  repos.requestRepos = function(callback){
    $.get('github/user/repos')
    .then(function(data){
      var myMappedData = data.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        lastUpdated: repo.updated_at
      }));
      callback(myMappedData);
    })
  };

  module.repos = repos;
})(app);


// .then(data => repos.all = data)
// .then(callback);
