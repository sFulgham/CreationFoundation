define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');

    self.navBar = self.common.bb.Model.extend({
        defaults: {
            brand: 'Steven Fulgham',
            navItems: [
                {id: 1, href: '#about', title: 'About'},
                {id: 2, href: '#portfolio', title: 'Portfolio'},
                {id: 3, href: '#contact', title: 'Contact'},
                {id: 4, href: './unitTest/backboneTest.html', title: 'Unit Test'}
            ]
        }
    });

    return {
        init: self.navBar
    };
});
