(function () {
    "use strict";

    angular.module('myApp.work', [
        "myApp.work.controller",
        "myApp.work.services",
    ])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/dashBoard', {
            controller: 'workController',
            controllerAs: 'DashboardVM',
            templateUrl: 'ng_app/components/work/work.html',
            //resolve: {}
        });
    }

})();