(function () {
    "use strict";

    var angualr = require('angular');

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
    require('./../common/services/common.services.js');
    require('./../common/services/userResource.js');

    // Controllers
    require('./controllers/userListCtrl.js');
    require('./controllers/userDetailCtrl.js');

    // Directives
    require('./directives/addressDirective.js');

}());




