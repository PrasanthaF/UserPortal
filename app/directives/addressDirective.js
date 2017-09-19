(function () {
    "use strict";

    var angualr = require('angular');
    
    angualr.module('userPortal').directive('userAddress', function () {
        return {
            templateUrl: 'app/views/addressView.html',
            restrict: 'E'
        };
    });
}());