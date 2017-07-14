'use strict';

var projectsArray = [];

function Project (addProjectsObj) {
  this.projectName = addProjectsObj.projectName;
  this.createdOn= parseInt((new Date() - new Date(addProjectsObj.createdOn))/60/60/24/1000);
  this.screenshot = 'images/screenshots/' + addProjectsObj.screenshot + '.jpg';
  this.problem = addProjectsObj.problem;
  this.solution = addProjectsObj.solution;
  this.repoLink = addProjectsObj.repoLink;
}

Project.prototype.toTheDom = function() {
  var getProjectTemplate = $('#projectTemplate').html();
  var projectCompiler = Handlebars.compile(getProjectTemplate);
  return projectCompiler(this);
};

// addProjects defined in addprojects.js
addProjects.sort(function(a,b){
  return ((new Date(b.createdOn)) - (new Date(a.createdOn)));
});

addProjects.forEach(function(projet){
  projectsArray.push(new Project(projet));
});

projectsArray.forEach(function(projAppend){
  $('#project-section').append(projAppend.toTheDom());
});
