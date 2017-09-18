(function () {
    "use strict";

    var angualr = require('angular');

    angular
        .module("userPortal")
        .controller("UserListCtrl", ["userResource", function (userResource) {
            var vm = this;

            userResource.query(function (data) {
                vm.users = data;
            });
            vm.showImage = false;

            vm.toggleImage = function () {
                vm.showImage = !vm.showImage;
            };
        }]);
}());
