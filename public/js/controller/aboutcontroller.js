'use strict';

var app = app || {};

(function(module){

  const aboutController = {};
  aboutController.index = () => {
    $('.tab-content').hide();
    $('#about-section').show();
  }

  module.aboutController = aboutController;

})(app);
