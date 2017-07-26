'use strict';

var app = app || {};

(function(module){

  function Project (addProjectsObj) {
    Object.keys(addProjectsObj).forEach(key => this[key] = addProjectsObj[key]);
  }

  Project.all = [];

  Project.prototype.toTheDom = function() {
    var projectCompiler = Handlebars.compile($('#projectTemplate').html());

    this.createdOn = parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000);
    this.screenshot = 'images/screenshots/' + this.screenshot + '.jpg';

    return projectCompiler(this);
  };

  Project.loadAll = rawData => {
    rawData.sort((a,b) => (new Date(b.createdOn)) - (new Date(a.createdOn)));
    Project.all = rawData.map(projet => new Project(projet));
  }

  Project.getData = callback => {
    $.getJSON('../../data/addprojects.json')
      .then(
      function(data) {
        localStorage.setItem('projectList', JSON.stringify(data));
        Project.loadAll(data);
        callback();
      }, function(err) {
        console.error(err);
      }
    );
  }

  Project.numWordsProblemSolution = () => {
    return Project.all
        .map(proj => {
          return {
            projectName: proj.projectName,
            numWordsProblem: Project.all
                .filter(projMatch => projMatch.projectName === proj.projectName)
                .map(ps => ps.problem.split(' ').length)
                .reduce((acc, cur) => acc + cur),
            numWordsSolution: Project.all
                .filter(projMatch => projMatch.projectName === proj.projectName)
                .map(ps => ps.solution.split(' ').length)
                .reduce((acc, cur) => acc + cur)
          }
        })
  };

  Project.stats = () => {
    return {
      projectName: Project.all.map(name => name.projectName),
      numWordsProblem: Project.numWordsProblem(),
      numWordsSolution: Project.numWordsSolution()
    }
  };

  module.Project = Project;

})(app);
