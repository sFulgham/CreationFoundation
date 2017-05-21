define(function(require, exports){
   'use strict';

    var self = this;

    self.init = function(app){
        var innerSelf = this;

        innerSelf.navWidgetCtrl = function($scope, $rootScope){
            var nwc = this;
            nwc.scope = $scope;
        };

        app.controller('navWidgetCtrl', ['$scope', '$rootScope', innerSelf.navWidgetCtrl]);
    };

    return {
        init: self.init
    }
});
