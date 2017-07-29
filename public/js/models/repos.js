'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.get('github/user/repos')
    .then(function(data){
      repos.all = data.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        lastUpdated: repo.updated_at
      }));
      callback(repos.all);
    })
  };
  // repos.requestRepos = function(ctx, next){
  //   $.ajax({
  //     url: '/github/user/repos',
  //     method: 'GET'
  //   })
  //   .then(function(data){
  //     repos.all = data.map(repo => ({
  //       name: repo.name,
  //       html_url: repo.html_url,
  //       description: repo.description,
  //       lastUpdated: repo.updated_at
  //     }));
  //     ctx.repos = repos.all;
  //     next();
  //   })
  // };

  module.repos = repos;
})(app);


// .then(data => repos.all = data)
// .then(callback);
