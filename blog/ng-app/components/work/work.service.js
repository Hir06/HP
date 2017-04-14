/// <reference path="../../../content/projectData.htm" />
/// <reference path="../../../content/projectData.htm" />
(function () {
    angular.module('myApp.work.services', [])
           .factory('workService', workService);

    workService.$inject = ["$q", "$http", "appConstants"];

    function workService($q, $http, appConstants) {


        var workService = {
            fetchProjectDetails: fetchProjectDetails
        };

        return workService;

        function fetchProjectDetails(params) {
            var def = $q.defer();

            var req = {
                method: 'GET',
                url: '../content/projectData.htm',
               
              
            }

            $http(req).then(function (response, status, headers, config) {
                def.resolve({
                    projectData: response.data
                    //quote_available: response.data.quote_available,
                    //quote_max: response.data.quote_max
                });
            }, function (arg) {
                def.reject(arg.data);
            });

            return def.promise;
        }

    }
})();