// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.shell','starter.home','starter.day','starter.searceh','starter.my'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('shell', {
      url: '/tab',
      templateUrl: './tpls/shell.html',
      controller: 'tabController'
    })
    .state('shell.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: './tpls/home.html'
        }
      }
    })
    .state('shell.day', {
      url: '/day',
      views: {
        'day-tab': {
          templateUrl: './tpls/day.html',
          controller: 'dayController'
        }
      }
    })
    .state('shell.searceh', {
      url: '/searceh',
      views: {
        'searceh-tab': {
          templateUrl: './tpls/searceh.html'
        }
      }
    })
    .state('shell.my', {
      url: '/my',
      views: {
        'my-tab': {
          templateUrl: './tpls/my.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab');
})