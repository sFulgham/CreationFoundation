(function() {
    'use strict';

    require.config({
        shim: {
            'bootstrap': {'deps': ['jquery']},
            'backbone': {'deps': ['jquery', 'underscore']},
            'marionette': {'deps': ['backbone']},
            'jqueryUi': {'deps': ['jquery'], 'exports': 'jQuery.ui'},
            'modernizer': {'exports': 'Modernizr'},
            'swiper': {'deps': ['jquery']}
        },
        paths: {
            jquery: '../../plugins/jquery-1.11.3.min',
            jqueryUi: '../../plugins/jquery-ui.min',
            modernizer: '../../plugins/modernizr-2.8.3',
            underscore: '../../plugins/underscore-min',
            backbone: '../../plugins/backbone-1.2.1',
            marionette: '../../plugins/backbone.marionette.min',
            bootstrap: '../../plugins/bootstrap.min',
            swiper: '../../plugins/swiper.min',
            text: '../../plugins/text',
            imageLoad: '../../plugins/image',
            imagePath: '../../../css/images',
            utils: '../../utils',
            configs: '../../configs',
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
        },
        urlArgs: 'bust=v1.1'
    });

    require(['modernizer']);
    require(['jqueryUi']);

    require(['root/app'], function(app) {
        app.init();
    });
})();
