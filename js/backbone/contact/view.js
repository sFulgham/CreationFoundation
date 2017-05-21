define(function(require, exports) {
    'use strict';

    var self = this;
    self.common = require('utils/commonBackbone');
    self.contactTpl = require('text!contactTemplates/contact.html');
    self.eMailer = require('utils/sendMail');

    self.contactView = self.common.mn.ItemView.extend({
        className: 'container',
        tagName: 'div',
        template: self.common._.template(self.contactTpl),
        events: {
            'submit form': 'submitEmail'
        },
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));
        },
        initialize: function() {
            self.common._.bindAll(this, 'submitEmail');
        },
        showErrors: function(errors) {
            this.$('.control-group .error').removeClass('error');
            _.each(errors, function (error) {
                var errElem = this.$('#' + error.name);
                var controlGroup = errElem.parents('.control-group');
                errElem.addClass('error');
                controlGroup.find('.help-inline').text(error.message);
            }, this);
        },
        hideErrors: function () {
            this.$('.control-group .error').removeClass('error');
            this.$('.help-inline').text('');
            $('.contact-section .sending-mail i').removeClass('hide');
            $('.contact-section .sending-mail').removeClass('hide').html('<i class="fa fa-spinner spin"></i>&nbsp;Sending email.');
        },
        submitEmail: function(evt) {
            evt.preventDefault();

            var data = {
                name: '',
                email: '',
                www: '',
                message: '',
                appType: 'backbone'
            };

            data.name = $('#name').val();
            data.email = $('#email').val();
            data.www = $('#www').val();
            data.message = $('#message').val();

            this.model.set(data, {validate: true});
            if(this.model.validationError != null){
                this.showErrors(this.model.validationError);
            } else{
                this.hideErrors();
                data['callback'] = function(){
                    $('.contact-section .sending-mail i').addClass('hide');
                    $('.contact-section .sending-mail').text('Email sent.');
                };
                self.eMailer.mail(data);
            }
        }
    });

    return {
        init: self.contactView
    }
});
