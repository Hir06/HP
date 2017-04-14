(function () {
    "use strict";
    angular.module('myApp.work.controller', [])
            .controller('workController', workController);

    workController.$inject = ['$timeout', 'workService', 'appConstants'];

    function workController($timeout, workService, appConstants) {
       


        var _this = this;
        _this.LayoutClass = 'grid';
        _this.query = "";
        _this.title = "Hello world";
        function getData(paramString) {
            var deferred = $q.defer();
            $http.get('http://starlord.hackerearth.com/kickstarter')
              .success(function (data) {
                  deferred.resolve({
                      data: data
                  });
              }).error(function (msg, code) {
                  deferred.reject(msg);
              });
            return deferred.promise;
        };
        _this.sortByList = [
            { category: "likes", display: "Likes", icon: "thumb_up", selected: "true" },
            { category: "dislikes", display: "Dislikes", icon: "thumb_down", selected: "false" },
            { category: "learner", display: "Learners", icon: "people", selected: "false" },
            { category: "hours", display: "Duration", icon: "schedule", selected: "false" }
        ];


        //  _this.AppService = AppService;
        _this.fetchProjectDetails = fetchProjectDetails;
    
        function fetchProjectDetails() {
            var promiseObj = workService.fetchProjectDetails();
            promiseObj.then(function success(data) {

                _this.projectData = data.projectData;
                var i = 0;
                //var dataForAutocomplete = {}
                //for(i=0;i<_this.projectData.length;i++){
                //    dataForAutocomplete[i] = _this.projectData[i].title;

                //}
                //_this.projectData.map(function (d) {
                //    var tags = d.title.map(function (tag) {
                //        dataForAutocomplete[tag] = "http://placehold.it/250x250";
                //    })

                //});
                //var temp = ["Boston Celtics", "Chicago Bulls", "Miami Heat", "Orlando Magic", "Atlanta Hawks", "Philadelphia Sixers", "New York Knicks", "Indiana Pacers", "Charlotte Bobcats", "Milwaukee Bucks", "Detroit Pistons", "New Jersey Nets", "Toronto Raptors", "Washington Wizards", "Cleveland Cavaliers"];
                //$('#search').autocomplete(temp);
                //$('#search').autocomplete({
                //    source: dataForAutocomplete,
                //    minLength: 0,
                //    delay: 100
                //});
                //$("#search").on('change', function (event, ui) {
                //    alert($(this).val());
                //});

                //$('#search').on("autocompletecreate", function (event, ui) {
                //    alert("ssssss");
                //});
            },
            function error() {
                Materialize.toast("Couldn't load projectData!", 4000, "red")
            });
        }

      
    


        fetchProjectDetails();

    }

})();