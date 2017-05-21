define(function(require, exports) {
    'use strict';

    var self = this;
    self.angular = require('angular');
    require('ui_router');
    self.app = self.angular.module('app', ['ui.router']);

    return self.app;
});
