define(function(require, exports) {
    'use strict';

    var self = this;
    var $ = require('jquery');
    var _ = require('underscore');
    require('bootstrap');

    self.toolTip = function(parms) {
        _.each(parms, function(toolTip) {
            $(toolTip.elem).tooltip({
                title: toolTip.message,
                animation: true,
                placement: (toolTip.elem === '.unit-test') ? 'bottom' : 'top'
            });

            $(toolTip.elem).on('hover', function(evt) {
                evt.preventDefault();
                $(toolTip.elem).tooltip('show');
            });
        });
    };

    return {
        init: self.toolTip
    };
});
