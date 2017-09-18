(function () {
    "use strict";

    var angualr = require('angular');
    
    angualr.module('userPortal').directive('userAddress', function () {
        return {
            template: "{{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }} {{ user.address.zipcode }}",
            restrict: "E"
        };
    });
}());