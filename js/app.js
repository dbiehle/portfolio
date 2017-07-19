'use strict';

function Project (addProjectsObj) {
  this.projectName = addProjectsObj.projectName;
  this.createdOn= parseInt((new Date() - new Date(addProjectsObj.createdOn))/60/60/24/1000);
  this.screenshot = 'images/screenshots/' + addProjectsObj.screenshot + '.jpg';
  this.problem = addProjectsObj.problem;
  this.solution = addProjectsObj.solution;
  this.repoLink = addProjectsObj.repoLink;
}

Project.all = [];

Project.prototype.toTheDom = function() {
  var getProjectTemplate = $('#projectTemplate').html();
  var projectCompiler = Handlebars.compile(getProjectTemplate);
  return projectCompiler(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b){
    return ((new Date(b.createdOn)) - (new Date(a.createdOn)));
  });

  rawData.forEach(function(projet){
    Project.all.push(new Project(projet));
  });

  Project.all.forEach(function(projAppend){
    $('#project-section').append(projAppend.toTheDom());
  });
}

function getData() {
  $.getJSON('js/addprojects.json').then(
    function(data) {
      localStorage.setItem('projectList', JSON.stringify(data));
      Project.loadAll(data);
    }, function(err) {
    console.error(err);
  }
  );
}

$(document).ready(function(){
  if (localStorage.projectList) {
    let retrievedData = JSON.parse(localStorage.projectList);
    Project.loadAll(retrievedData);
  } else {
    getData();
  }
})
