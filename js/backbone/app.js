define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.layoutView = require('root/config/layoutView');
    self.appConfig = require('root/config/appConfig');

    self.app = self.common.mn.Application.extend();

    self.start = function() {
        var app = new self.app({
            initialize: function(){
                new self.layoutView.init();
            }
        });

        app.on('start', function() {
            self.common.bb.history.start();
            self.appConfig.init();
        });

        app.start();
    };

    exports.init = function() {
        self.start();
    }
});
