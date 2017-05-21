define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');

    self.contact = self.common.bb.Model.extend({
        defaults: {
            name: '',
            email: '',
            www: '',
            message: ''
        },
        validate: function(attr, options) {
            var errors = [];
            var email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if(!attr.name)
                errors.push({name: 'name', message: 'Please insert your name.'});

            if(!attr.email)
                errors.push({name: 'email', message: 'Please insert an email address.'});

            if(!email_filter.test(attr.email))
                errors.push({name: 'email', message: 'Please enter a valid email address.'});

            if(!attr.message)
                errors.push({name: 'message', message: 'Please send me a message.'});

            return errors.length > 0 ? errors : false;
        },
        initialize: function() {
            this.on("invalid", function(model, error) {
            });
        }
    });

    return {
        init: self.contact
    };
});
