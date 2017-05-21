define(function(require, exports) {
    'use strict';

    var self = this;
    self.appInit = require('config/appInit');

    self.appConfig = function(angularApp) {
        var innerSelf = this;

        innerSelf.configRoutes = function($stateProvider) {
            var templatePath = 'js/angular/';
            var app = {
                name: 'app',
                url: 'angularPortfolio',
                views: {
                    'layout': {
                        templateUrl: templatePath + 'config/templates/layout.html',
                        controller: 'layoutCtrl'
                    },
                    'navWidget@app': {
                        templateUrl: templatePath + 'navWidget/templates/navWidget.html',
                        controller: 'navWidgetCtrl'
                    },
                    'mainMenu@app': {
                        templateUrl: templatePath + 'mainMenu/templates/mainMenu.html',
                        controller: 'mainMenuCtrl'
                    },
                    'content@app': {
                        templateUrl: templatePath + 'config/templates/content.html'
                    },
                    'navbar@content': {
                        templateUrl: templatePath + 'navBar/templates/navBar.html',
                        controller: 'navBarCtrl'
                    },
                    'jumboTron@content': {
                        templateUrl: templatePath + 'jumboTron/templates/jumboTron.html',
                        controller: 'jumboTronCtrl'
                    },
                    'aboutMe@content': {
                        templateUrl: templatePath + 'aboutMe/templates/aboutMe.html',
                        controller: 'aboutCtrl'
                    },
                    'portfolio@content': {
                        templateUrl: templatePath + 'portfolio/templates/portfolio.html',
                        controller: 'portfolioCtrl'
                    },
                    'contact@content': {
                        templateUrl: templatePath + 'contact/templates/contact.html',
                        controller: 'contactCtrl'
                    },
                    'privacy@content': {
                        templateUrl: templatePath + 'privacy/templates/privacy.html',
                        controller: 'privacyCtrl'
                    }
                }
            };

            $stateProvider
                .state(app);
        };

        innerSelf.runApp = function($state, $rootScope) {
            $state.go('app');
            $rootScope.$on('$viewContentLoaded', function(event) {
                if(event.targetScope.$id === 7)
                    self.appInit.init();
            });
        };

        angularApp.config(['$stateProvider', innerSelf.configRoutes])
            .run(['$state', '$rootScope', innerSelf.runApp]);
    };

    return {
        init: self.appConfig
    }
});