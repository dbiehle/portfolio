'use strict';

/*********************************************************
  TODO:
    - create a new JS file to modify the source data and render it to the DOM
        Estimated time: 1 hour
    - use jQuery to clone the example markup for each project
        Estimated time: 30 minutes
    - Project prototype needs a .toHtml() function to add new data to the DOM
        Estimated time: 30 minutes
************************************************************/
var projects = [];

function Project (addProjectsObj) {
  this.projectName = addProjectsObj.projectName;
  this.screenshot = 'images/screenshots/' + addProjectsObj.screenshot + '.jpg';
  this.problem = addProjectsObj.problem;
  this.solution = addProjectsObj.solution;
  this.repoLink = addProjectsObj.repoLink;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('p').first().text(this.projectName);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('div.problem').first().text(this.problem);
  $newProject.find('div.solution').first().text(this.solution);
  $newProject.find('div.repo a').attr('href', this.repoLink);

  return $newProject;
};
