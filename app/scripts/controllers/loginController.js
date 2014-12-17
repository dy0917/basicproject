'use strict';

/**
 * @ngdoc function
 * @name xtripApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xtripApp
 */
app
  .controller('loginController', function ($scope,loginService,$window,sharedService) {
      $scope.loginedUser=null;

        $scope.login=function(){
             $window.localStorage.setItem  (name, JSON.stringify({name:"testname",password:"Pa55word"}));
             sharedService.prepForBroadcast("asdfasdf");
               
//          $scope.loginedUser={
//    "id": 1,
//    "name": "wewe2012"
//
//}
//         var div=document.getElementById("test");
//         div.innerHTML ="";
      //    $("#test").toggleClass("displaythis");
    //      $scope.$broadcast("myEvent", {username: "user.username" });
	//	loginService.login(data,$scope); //call login service
	};

  });
