(function() {
    "use strict";
    angular.module('myApp.work.controller', [])
        .controller('workController', workController);

    workController.$inject = ['$rootScope', '$scope', '$route', '$location', '$timeout', '$interval', 'AppService', 'workService', '$http', '$q', 'appConstants'];

    function workController($rootScope, $scope, $route, $location, $timeout, $interval, AppService, workService, $http, $q, appConstants) {



        var _this = this;
        _this.hover = false;
        _this.LayoutClass = 'grid';
        _this.query = "";
        _this.fetchProjectDetails = fetchProjectDetails;
        _this.showDetail = showDetail;
        _this.AppService = AppService;


        window.scrollTo(0, 0);
        AppService.ShowLoader();

        //  _this.AppService = AppService;


        function showDetail(projectName) {

            $location.url('/workDetail/' + projectName);

        }

        function fetchProjectDetails() {
            AppService.ShowLoader();
            var promiseObj = workService.fetchProjectDetails();
            promiseObj.then(function success(data) {
                    _this.projectData = data.projectData;
                    AppService.HideLoader();


                },
                function error() {
                    Materialize.toast("Couldn't load data", 4000, "red");
                    AppService.HideLoader();
                });




        }





        fetchProjectDetails();

    }

})();