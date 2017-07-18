'use strict';

var projectsArray = [];

var projectFun = {
  projectName: []
};

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

// need a $.getSON statement that gets the url for the JSON
// also need a .then statement to handle what to do if successful
function getData() {
  const url = 'js/addprojects.json';
  $.getJSON(url).then(
    function(data) {
  console.log('success!')
  // console.log(data)
    projectsArray = data;
  console.log(projectsArray)
    }, function(err) {
  console.log('error')
  console.log(err)
  }
  );
}

$(document).ready(function(){
  getData();
})


// addProjects.sort(function(a,b){
//   return ((new Date(b.createdOn)) - (new Date(a.createdOn)));
// });
//
// addProjects.forEach(function(projet){
//   projectsArray.push(new Project(projet));
// });

projectsArray.forEach(function(projAppend){
  $('#project-section').append(projAppend.toTheDom());
});
