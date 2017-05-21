define(function(require, exports){
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.navBarTpl = require('text!navBarTemplates/navBar.html');

    self.navBarView = self.common.mn.ItemView.extend({
        className: 'container',
        tagName: 'div',
        template: self.common._.template(self.navBarTpl),
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
        },
        initialize: function() {
        }
    });

    return {
        init: self.navBarView
    }
});
