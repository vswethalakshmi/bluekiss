/**
 * @author Bluekiss
 */
var bluekiss=angular.module('bluekiss',['ng-route']);

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
