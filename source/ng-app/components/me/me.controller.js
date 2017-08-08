(function() {
    "use strict";
    angular.module('myApp.me.controller', [])
        .controller('meController', meController);

    meController.$inject = ['$timeout', '$scope', 'meService', 'appConstants'];

    function meController($timeout, $scope, meService, appConstants) {


        var _this = this;
        _this.designer = false;
        $('.parallax').parallax();

        // _this.changeGray = changeGray;

        // function changeGray() {
        //     $('.designer-img').css('background-position', '0px');
        //     _this.designer = true;
        // }
    }
})();