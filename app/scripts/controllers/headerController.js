'use strict';

/**
 * @ngdoc function
 * @name xtripApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtripApp
 */
app
        .controller('headerController', function($scope, loginService, $window,sharedService) {
            $scope.loginedUser = null;

            $scope.login = function() {
//          $scope.loginedUser={
//    "id": 1,
//    "name": "wewe2012"
//
//}
//         var div=document.getElementById("test");
//         div.innerHTML ="";
                $("#test").toggleClass("displaythis");
                console.log("afasdf");
                //      $scope.$broadcast("myEvent", {username: "user.username" });
                //	loginService.login(data,$scope); //call login service
            };
             $scope.$on('handleBroadcast', function() {
                 console.log( $window.localStorage.getItem(name));

    });   
        });
