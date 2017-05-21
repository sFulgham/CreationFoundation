(function() {
    'use strict';

    require.config({
        shim: {
            'bootstrap': {'deps': ['jquery']},
            'jqueryUi': {'deps': ['jquery'], 'exports': 'jQuery.ui'},
            'modernizer': {'exports': 'Modernizr'},
            'backbone': {'deps': ['jquery', 'underscore']},
            'marionette': {'deps': ['backbone']},
            'swiper': {'deps': ['jquery']},
            'mocha': {'deps': ['require'], init: function(){
                this.mocha.setup('bdd');
                return this.mocha;
            }},
            'chai_jquery': {'deps': ['jquery', 'chai']},
            'chai_spy': {'deps': ['chai']}
        },
        paths: {
            backboneApp: '../../../js/backbone',
            jquery: '../../../js/plugins/jquery-1.11.3.min',
            jqueryUi: '../../../js/plugins/jquery-ui.min',
            modernizer: '../../../js/plugins/modernizr-2.8.3',
            underscore: '../../../js/plugins/underscore-min',
            backbone: '../../../js/plugins/backbone-1.2.1',
            marionette: '../../../js/plugins/backbone.marionette.min',
            bootstrap: '../../../js/plugins/bootstrap.min',
            swiper: '../../../js/plugins/swiper.min',
            mocha: '../plugins/mocha',
            chai: '../plugins/chai',
            chai_spy: '../plugins/chai-spies',
            chai_jquery: '../plugins/chai-jquery',
            require: '../plugins/require',
            text: '../../../js/plugins/text',
            utils: '../../../js/utils',
            spec: '../../specs',
            root: '../../',
            mainMenuTemplates: '../../../js/backbone/mainMenu/templates',
            navWidgetTemplates: '../../../js/backbone/navWidget/templates',
            navBarTemplates: '../../../js/backbone/navBar/templates',
            jumboTronTemplates: '../../../js/backbone/jumboTron/templates',
            aboutMeTemplates: '../../../js/backbone/aboutMe/templates',
            portfolioTemplates: '../../../js/backbone/portfolio/templates',
            contactTemplates: '../../../js/backbone/contact/templates',
            privacyTemplates: '../../../js/backbone/privacy/templates',
            configTemplates: '../../../js/backbone/config/templates'
        }
    });

    require(['modernizer']);
    require(['jquery']);
    require(['jqueryUi']);
    require(['underscore']);
    require(['mocha']);
    require(['chai_jquery']);

    require(['app'], function(app) {
        app.init(appName);
    });
})();
