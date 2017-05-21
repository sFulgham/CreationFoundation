(function() {
    'use strict';

    require.config({
        shim: {
            'bootstrap': {'deps': ['jquery']},
            'jqueryUi': {'deps': ['jquery'], 'exports': 'jQuery.ui'},
            'modernizer': {'exports': 'Modernizr'},
            'swiper': {'deps': ['jquery']},
            'angular': {'exports': 'angular'},
            'ui_router': {'deps': ['angular']}
        },
        paths: {
            jquery: '../../plugins/jquery-1.11.3.min',
            jqueryUi: '../../plugins/jquery-ui.min',
            modernizer: '../../plugins/modernizr-2.8.3',
            underscore: '../../plugins/underscore-min',
            angular: '../../plugins/angular.min',
            ui_router: '../../plugins/angular-ui-router.min',
            bootstrap: '../../plugins/bootstrap.min',
            swiper: '../../plugins/swiper.min',
            text: '../../plugins/text',
            domReady: '../../plugins/domReady',
            utils: '../../utils',
            config: '../config',
            root: '..',
            mainMenuTemplates: '../mainMenu/templates',
            navWidgetTemplates: '../navWidget/templates',
            navBarTemplates: "../navBar/templates",
            jumboTronTemplates: '../jumboTron/templates',
            aboutMeTemplates: '../aboutMe/templates',
            portfolioTemplates: '../portfolio/templates',
            contactTemplates: '../contact/templates',
            privacyTemplates: '../privacy/templates',
            configTemplates: '../config/templates'
        }
    });

    require(['modernizer']);
    require(['jqueryUi']);

    require(['root/app'], function(app) {
        app.init();
    });
})();

