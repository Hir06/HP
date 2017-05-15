(function () {
    "use strict";
    angular.module('myApp.workDetail.controller', [])
            .controller('workDetailController', workDetailController);

    workDetailController.$inject = ['$rootScope', '$scope', '$route', '$routeParams','$location', '$timeout', '$interval', 'myAppService', '$http', '$q', 'appConstants'];

    function workDetailController($rootScope, $scope, $route, $routeParams,$location, $timeout, $interval, myAppService, $http, $q, appConstants) {
       


        var _this = this;
        _this.hover = false;
        _this.LayoutClass = 'grid';
        _this.query = "";
   
        _this.fetchProjectDetails = fetchProjectDetails;
        _this.showRightImage = showRightImage;
      
        function fetchProjectDetails() {
            var promiseObj = myAppService.fetchProjectDetails();
            promiseObj.then(function success(data) {
                
                    _this.projectData = data.projectData;
                    _this.imageCount = [];
                    for (var i = 0; i < 5; i++) {
                        _this.imageCount.push({index:i+1})
                    }

                    _this.projectName = $routeParams.projectName;
                    _this.projectName.replace('', '%20');
            },
            function error() {
                Materialize.toast("Couldn't load projectData!", 4000, "red")
            });
        }

      
        function showRightImage(object) {
            alert("object.target.className");

        }


        fetchProjectDetails();

    }

})();