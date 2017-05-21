define(function(require, exports) {
    'use strict';

    var self = this;
    self.mocha = require('mocha');
    self.chai = require('chai');
    self.chaiJquery = require('chai_jquery');

    self.init = function(appName) {
        //load selected test
        var backbone = function() {
            require('spec/backbone/appPluginsSpec');
            require('spec/backbone/backboneModelSpec');
            require('spec/backbone/backboneViewSpec');
            require('spec/backbone/backboneEventsSpec');
        };

        switch(appName) {
            case 'backbone':
                backbone();
                break;
        }

        self.chai.use(self.chaiJquery);
        var should = self.chai.should();

        self.mocha.run();
    };

    return {
        init: self.init
    }
});
