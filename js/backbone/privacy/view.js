define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.privacyTpl = require('text!privacyTemplates/privacy.html');

    self.privacyView = self.common.mn.ItemView.extend({
        className: 'col-lg-12 footer-section color dark-gray',
        tagName: 'section',
        template: self.common._.template(self.privacyTpl),
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
        },
        initialize: function() {
        }
    });

    return {
        init: self.privacyView
    }
});
