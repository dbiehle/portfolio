'use strict';

var app = app || {};

page('/', app.projectController.index)
page('/about', app.aboutController.index);
page('/stats', app.adminController.index);

page('/stats/:name', app.adminController.findRepo, app.adminController.index);

page();
