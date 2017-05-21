define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');

    self.menu = self.common.bb.Model.extend({
        defaults: {
            caption: 'Select an MV* framework or plugin.',
            menuItems: [
                {id: 1, className: 'angular-link', href: 'clean.html?app=angular', title: 'Angular'},
                {id: 2, className: 'react-link', href: '#', title: 'React'},
                //{id: 3, className: 'backbone-link', href: 'backbone.html', title: 'Backbone'},
                {id: 3, className: 'ember-link', href: '#', title: 'Ember'},
                {id: 4, className: 'knockout-link', href: '#', title: 'Knockout'}
            ]
        },
        clicked: function() {
            this.trigger('menuItem:clicked', this);
        }
    });

    return {
        init: self.menu
    };
});
