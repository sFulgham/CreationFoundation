define(function(require, exports){
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.navWidgetTpl = require('text!navWidgetTemplates/navWidget.html');

    self.navWidgetView = self.common.mn.ItemView.extend({
        className: 'menuBtn',
        tagName: 'div',
        template: self.common._.template(self.navWidgetTpl),
        attributes: {
            'data-clicked': false
        },
        render: function() {
            this.$el.append(this.template());
        },
        initialize: function() {
        }
    });

    return{
        init: self.navWidgetView
    }
});
