'use strict';

var app = app || {};

(function(module){

  const statsController = {};
  statsController.index = () => {
    $('.tab-content').hide();
    $('#stats-section').show();
  }

  module.statsController = statsController;

})(app);
