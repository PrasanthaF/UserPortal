webpackJsonp([0],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);

    var app = angular.module("userPortal",
        ["common.services", "ui.router", "ui.bootstrap"]);

        // Routing Configurations
    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("userList", {
                    url: "/",
                    templateUrl: "app/views/userListView.html",
                    controller: "UserListCtrl as vm"
                })
                .state("userDetail", {
                    url: "/users/:id",
                    templateUrl: "app/views/userDetailView.html",
                    controller: "UserDetailCtrl as vm",
                    resolve: {
                        userResource: "userResource",

                        user: function (userResource, $stateParams) {
                            var id = $stateParams.id;
                            return userResource.get({ id: id }).$promise;
                        }
                    }
                });
        }]
    );

    // Exception Handling
    app.config(function ($provide) {
        $provide.decorator("$exceptionHandler",
            ["$delegate",
                function ($delegate) {
                    return function (exception, cause) {
                        exception.message = "Please contact us for assistance " + exception.message;
                        $delegate(exception, cause);
                        alert(exception.message);
                    };
                }]);
    });

    // Services
    __webpack_require__(60);
    __webpack_require__(61);

    // Controllers
    __webpack_require__(62);
    __webpack_require__(63);

    // Directives
    __webpack_require__(64);

}());






/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);
    
    angular
        .module("common.services", ["ngResource"]);
}());



/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);

    angular
        .module("common.services")
        .factory("userResource", ["$resource", function($resource){
            return $resource("https://jsonplaceholder.typicode.com/users/:id");
        }]);
}());


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);

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


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);

    angular
        .module("userPortal")
        .controller("UserDetailCtrl", ["user", function (user) {
            var vm = this;

            vm.user = user;

            vm.title = "user Detail: " + vm.user.name;
        }]);
}());


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";

    var angualr = __webpack_require__(5);
    
    angualr.module('userPortal').directive('userAddress', function () {
        return {
            template: "{{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }} {{ user.address.zipcode }}",
            restrict: "E"
        };
    });
}());

/***/ })

},[58]);