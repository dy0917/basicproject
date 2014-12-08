'use strict';

/**
 * @ngdoc function
 * @name basicprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basicprojectApp
 */
angular.module('basicprojectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
