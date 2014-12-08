'use strict';

/**
 * @ngdoc function
 * @name basicprojectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basicprojectApp
 */
angular.module('basicprojectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
