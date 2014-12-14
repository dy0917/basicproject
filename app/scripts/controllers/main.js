'use strict';

/**
 * @ngdoc function
 * @name basicprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basicprojectApp
 */
app
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.login=function(){
         console.log("asdfasdf");
     }
  });
