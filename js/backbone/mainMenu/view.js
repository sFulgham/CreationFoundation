define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.mainMenuTpl = require('text!mainMenuTemplates/mainMenu.html');

    self.mainMenuView = self.common.mn.ItemView.extend({
        className: 'col-md-12',
        tagName: 'ul',
        template: self.common._.template(self.mainMenuTpl),
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
        },
        initialize: function() {
        }
    });

    return {
        init: self.mainMenuView
    }
});
