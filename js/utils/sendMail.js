define(function(require, exports){
    'use strict';

    var self = this;
    var $ = require('jquery');

    self.sendMail = function(parms){
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'WVNxIpT-1DZa113E08cl8Q',
                'message': {
                    'from_email': parms.email,
                    'to': [
                        {
                            'email': 'stevenfulgham333@gmail.com',
                            'name': 'Steven Fulgham',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'Inquiry from '+ parms.appType +' portfolio website. From ' + parms.name + ' ' + parms.www,
                    'html': parms.message
                }
            }
        }).done(function(response) {
            parms.callback();
        });
    };

    return{
      mail: self.sendMail
    };
});
