define(function(require, exports) {
    'use strict';

    var self = this;
    var $ = require('jquery');
    self.angular = require('angular');
    self.app = require('config/angularApp');
    self.bootstrap = require('bootstrap');
    self.document = require('domReady!');
    self.routeConfig = require('config/routeConfig');

    self.layoutCtrl = require('config/controllers/layoutCtrl');
    self.navWidgetCtrl = require('root/navWidget/controllers/navWidgetCtrl');
    self.mainMenuCtrl = require('root/mainMenu/controllers/mainMenuCtrl');
    self.navBarCtrl = require('root/navBar/controllers/navBarCtrl');
    self.jumboTronCtrl = require('root/jumboTron/controllers/jumboTronCtrl');
    self.aboutCtrl = require('root/aboutMe/controllers/aboutCtrl');
    self.portfolioCtrl = require('root/portfolio/controllers/portfolioCtrl');
    self.contactCtrl = require('root/contact/controllers/contactCtrl');
    self.privacyCtrl = require('root/privacy/controllers/privacyCtrl');

    self.controllers = [
        {ctrl: self.layoutCtrl, text: 'layout'},
        {ctrl: self.navWidgetCtrl, text: 'site navigation widget'},
        {ctrl: self.mainMenuCtrl, text: 'main menu navigation'},
        {ctrl: self.navBarCtrl, text: 'top navigation bar'},
        {ctrl: self.jumboTronCtrl, text:'jumbo tron content'},
        {ctrl: self.aboutCtrl, text: 'about me content'},
        {ctrl: self.portfolioCtrl, text: 'portfolio content'},
        {ctrl: self.contactCtrl, text: 'contact content'},
        {ctrl: self.privacyCtrl, text: 'privacy content'}
    ];

    self.configure = function() {
        var controllerLength = self.controllers.length;

        for (var ctrlIndex = 0; ctrlIndex < controllerLength; ctrlIndex++) {
            var ctrlObj = self.controllers[ctrlIndex];
            var ctrl = ctrlObj.ctrl;
            ctrl.init(self.app);
        };

        $('#pre-loader').remove();
        self.routeConfig.init(self.app);
        self.angular.bootstrap(self.document, ['app']);
    };

    exports.init = function() {
        self.configure();
    }
});