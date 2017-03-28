var app = angular.module("myApp", []);
app.controller('IndexController', ['$scope', '$http', '$q', '$timeout', function ($scope, $http, $q, $timeout) {
    $scope.title = 'Hello here';
    $scope.getData = getData;
    $scope.data = '';
    $scope.q = '';
    $scope.language = '';
    $scope.isLoading = true;
    $scope.arrayToString = arrayToString;
    $scope.like = 0;
    $scope.increaseLike = increaseLike;

    $scope.Images = {};
    $scope.pages = [];

    $scope.init = init;
    init();
    getData();

    //convert array to string for tags
    function arrayToString(string) {
        return string.join(", ");
    };
    //increase likes
    function increaseLike($event) {
        $scope.like++;
    }

    //function to be called first time when page loads
    function init(paramString) {
        var thePromise = {}
        if (paramString == undefined) {
            var paramString = "list_deals";
        }
        thePromise = getData(paramString);
        thePromise.then(function (result) {

            $timeout(function () {
                $scope.data = result.data;
                $scope.isLoading = false;
            }, 0);


        }, function (data) {
            $scope.isLoading = false;
        });

    }


    //function that calls API
    function getData() {
        var deferred = $q.defer();
        $http.get('../content/projectData.htm')
          .success(function (data) {
              deferred.resolve({
                  data: data
              });
          }).error(function (msg, code) {
              deferred.reject(msg);
          });
        return deferred.promise;
    };
}]);
