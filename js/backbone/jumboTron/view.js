define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.jumboTronTpl = require('text!jumboTronTemplates/jumboTron.html');

    self.jumboTronView = self.common.mn.ItemView.extend({
        className: 'col-md-12',
        tagName: 'div',
        template: self.common._.template(self.jumboTronTpl),
        render: function() {
            this.$el.append(this.template());
        },
        initialize: function() {
        }
    });

    return {
        init: self.jumboTronView
    }
});
