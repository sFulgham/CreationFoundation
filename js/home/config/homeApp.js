(function() {
    'use strict';

    require.config({
        shim: {
            'bootstrap': {'deps': ['jquery']}
        },
        paths: {
            jquery: '../../plugins/jquery-1.11.3.min',
            bootstrap: '../../plugins/bootstrap.min',
            underscore: '../../plugins/underscore-min',
            utils: '../../utils',
            root: '..'
        },
        urlArgs: 'bust=v1.2'
    });

    require(['root/app'], function(app) {
        app.init();
    });
})();
