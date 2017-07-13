'use strict';

/*********************************************************
  TODO:
    
************************************************************/
var projectsArray = [];

function Project (addProjectsObj) {
  this.projectName = addProjectsObj.projectName;
  this.createdOn = addProjectsObj.createdOn;
  this.screenshot = 'images/screenshots/' + addProjectsObj.screenshot + '.jpg';
  this.problem = addProjectsObj.problem;
  this.solution = addProjectsObj.solution;
  this.repoLink = addProjectsObj.repoLink;
}

Project.prototype.toTheDom = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h2.project-name').first().text(this.projectName);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000));
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('div.problem').first().text(this.problem);
  $newProject.find('div.solution').first().text(this.solution);
  $newProject.find('div.repo a').attr('href', this.repoLink);

  return $newProject;
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
