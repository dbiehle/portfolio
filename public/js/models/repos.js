'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.ajax({
      url: 'github/user/repos',
      method: 'GET'
    })
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

  // repos.requestRepoByName = function(ctx, next){
  //   $.ajax({
  //     url: `/github/user/repos/${ctx.params.name}`,
  //     method: 'GET'
  //   })
  //   .then(function(data){
  //     var mappedData = data.map(repo => ({
  //       name: repo.name,
  //       html_url: repo.html_url,
  //       description: repo.description,
  //       lastUpdated: repo.updated_at
  //     }));
  //     ctx.repos = mappedData;
  //     next();
  //   })
  // };

  module.repos = repos;
})(app);


// .then(data => repos.all = data)
// .then(callback);
