define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');

    self.privacy = self.common.bb.Model.extend({
        defaults: {
            header: 'Privacy statement',
            privacyStatement: 'I understand that as technology advances the only way to learn is to research and study the work of those who are successful. ' +
            'With that being said I don&lsquo;t mind if you use my code in your projects. Good luck understanding' +
            ' it! ' +
            'However I do mind if you use my art work!'
        }
    });

    return {
        init: self.privacy
    };
});

