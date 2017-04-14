

(function () {
    'use strict';
    var myApp = angular.module("myApp", [
                    'ngRoute',
                    'myApp.work'
                  
    ])


    myApp.config(['$routeProvider', '$compileProvider', '$locationProvider',
                      function ($routeProvider, $compileProvider, $locationProvider) {
                          $routeProvider
                            .otherwise({
                                redirectTo: '/DashBoard'
                            });
                      }]);

    myApp.run(function ($rootScope, $window) {
        console.log("myApp started successfully!");
    });

})();
