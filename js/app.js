'use strict';

/////////////////////////////////////////////////////////
// TODO: make a constructor function for the projects
//        include project name, screenshot, description of problem, and solution
////////////////////////////////////////////////////////

var Projects = function(projectName, screenshot, problem, solution, repoLink) {
  this.projectName = projectName;
  this.screenshot = 'images/screenshots/' + screenshot + '.jpg';
  this.problem = problem;
  this.solution = solution;
  this.repoLink = repoLink;
};
