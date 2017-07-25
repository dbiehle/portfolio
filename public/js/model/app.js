'use strict';

var app = app || {};

(function(module){
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

  Project.loadAll = rawData => {
    rawData.sort((a,b) => (new Date(b.createdOn)) - (new Date(a.createdOn)));

    Project.all = rawData.map(projet => new Project(projet));

    Project.all.forEach(function(projAppend){
      $('#project-section').append(projAppend.toTheDom());
    });
  }

  Project.numWordsProblem = () => {
    return Project.all
        .map(proj => {
          return {
            numWordsProblem: Project.all
                .filter(projMatch => projMatch.projectName === proj.projectName)
                .map(ps => ps.problem.split(' ').length)
                .reduce((acc, cur) => acc + cur)
          }
        })
  };

  Project.numWordsSolution = () => {
    return Project.all
        .map(proj => {
          return {
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

  function getData() {
    $.getJSON('../../data/addprojects.json').then(
      function(data) {
        localStorage.setItem('projectList', JSON.stringify(data));
        Project.loadAll(data);
      }, function(err) {
      console.error(err);
    }
    );
  }

  $(function(){
    if (localStorage.projectList) {
      let retrievedData = JSON.parse(localStorage.projectList);
      Project.loadAll(retrievedData);
    } else {
      getData();
    }
  })

  module.Project = Project;

})(app);
