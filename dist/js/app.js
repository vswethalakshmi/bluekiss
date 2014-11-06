/**
 * @author Bluekiss
 */

'use strict';
var bluekiss=angular.module('bluekiss',['ngRoute','controllers']);

bluekiss.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      /*
      when('/phones/:phoneId', {
              templateUrl: 'partials/phone-detail.html',
              controller: 'PhoneDetailCtrl'
            }).*/
      
      otherwise({
        redirectTo: '/home'
      });
  }]);
