'use strict';

var app = app || {};

page('/', app.projectController.index)
page('/stats', app.requestRepos, app.adminController.index);
page('/about', app.aboutController.index);

page();
