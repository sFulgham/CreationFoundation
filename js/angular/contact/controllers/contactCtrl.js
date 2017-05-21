define(function(require, exports) {
    'use strict';

    var self = this;
    self.eMailer = require('utils/sendMail');

    self.init = function(app) {
        var innerSelf = this;

        innerSelf.contactCtrl = function($scope, $rootScope) {
            var cc = this;
            cc.scope = $scope;
            cc.model = {
                name: '',
                email: '',
                www: '',
                message: '',
                appType: 'angular'
            };
            cc.submitEmail = function($event, isValid) {
                $event.preventDefault();

                if(isValid) {
                    $('.contact-section .sending-mail i').removeClass('hide');
                    $('.contact-section .sending-mail').removeClass('hide').html('<i class="fa fa-spinner spin"></i>&nbsp;Sending email.');
                    cc.model['callback'] = function() {
                        $('.contact-section .sending-mail i').addClass('hide');
                        $('.contact-section .sending-mail').text('Email sent.');
                    };
                    self.eMailer.mail(cc.model);
                }
            };
        };

        app.controller('contactCtrl', ['$scope', '$rootScope', innerSelf.contactCtrl]);
    };

    return {
        init: self.init
    }
});
