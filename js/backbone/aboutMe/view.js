define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.aboutMeTpl = require('text!aboutMeTemplates/aboutMe.html');

    self.aboutMeView = self.common.mn.ItemView.extend({
        className: 'container',
        tagName: 'div',
        template: self.common._.template(self.aboutMeTpl),
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
        },
        initialize: function() {
        }
    });

    return {
        init: self.aboutMeView
    }
});
