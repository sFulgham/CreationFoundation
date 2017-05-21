define(function(require, exports){
    'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.layoutCtrl = function($scope, $rootScope){
            var lc = this;
            lc.scope = $scope;
        };

        app.controller('layoutCtrl', ['$scope', '$rootScope', innerSelf.layoutCtrl]);
    };

    return {
        init: self.init
    }
});
