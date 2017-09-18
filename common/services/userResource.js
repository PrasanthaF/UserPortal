(function () {
    "use strict";

    var angualr = require('angular');

    angular
        .module("common.services")
        .factory("userResource", ["$resource", function($resource){
            return $resource("https://jsonplaceholder.typicode.com/users/:id");
        }]);
}());
