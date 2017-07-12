'use strict';

/*********************************************************
  TODO:
    - create a new JS file to modify the source data and render it to the DOM
        Estimated time: 1 hour
        Actual time: about 1 hour
    - use jQuery to clone the example markup for each project
        Estimated time: 30 minutes
        Actual time: about 30 minutes
    - Project prototype needs a .toTheDom() function to add new data to the DOM
        Estimated time: 30 minutes
        Actual time: about 30 minutes
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

  $newProject.find('p').first().text(this.projectName);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('div.problem').first().text(this.problem);
  $newProject.find('div.solution').first().text(this.solution);
  $newProject.find('div.repo a').attr('href', this.repoLink);

  return $newProject;
};

addProjects.sort(function(a,b){
  return ((new Date(b.createdOn)) - (new Date(a.createdOn)));
});

addProjects.forEach(function(projet){
  projectsArray.push(new Project(projet));
});

projectsArray.forEach(function(projAppend){
  $('#project-section').append(projAppend.toTheDom());
});
