define(function(require, exports) {
    'use strict';

    var self = this;
    self.animateMm = require('utils/animateMainMenu');
    self.tooltip = require('utils/tooltip');
    self.animate = require('utils/animate');

    exports.init = function() {
        self.animate.init();
        self.animateMm.animateMainMenu(true);
        var toolTipElems = [
            {elem: '.react-link a', message: 'React version of the portfolio is coming soon!'},
            {elem: '.ember-link a', message: 'Ember version of the portfolio is coming soon!'},
            {elem: '.knockout-link a', message: 'Currently working on the Knockout version of the portfolio.'}
        ];

        self.tooltip.init(toolTipElems);
    }
});
