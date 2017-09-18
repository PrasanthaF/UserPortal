(function () {
    "use strict";

    var angualr = require('angular');

    angular
        .module("userPortal")
        .controller("UserDetailCtrl", ["user", function (user) {
            var vm = this;

            vm.user = user;

            vm.title = "user Detail: " + vm.user.name;
        }]);
}());
