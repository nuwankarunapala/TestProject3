// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router', 'ng-mfb'])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: '/templates/starter.html',
                controller: 'ListCtrl'
            })
            .state('view', {
                url: '/movie',
                templateUrl: '/templates/view.html',
                controller: 'ViewCtrl'
            });

        $urlRouterProvider.otherwise("/");

    })

.controller('ListCtrl', function($scope, $state) {
    $scope.changePage = function() {
        $state.go('view', { movieid: 1 });
    }
})

.controller('ViewCtrl', function($scope, $stateParams, $ionicHistory) {
    console.log($stateParams.movieid);
    $scope.goBack = function() {
        $ionicHistory.goBack();
    }
})

.controller("sideMenuControler", function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }
    $scope.images = [
        { link: '../img/list1.png', id: 1 },
        { link: '../img/list2.png', id: 2 },
        { link: '../img/list3.png', id: 3 },
        { link: '../img/list2.png', id: 4 },
        { link: '../img/list3.png', id: 5 },
        { link: '../img/list1.png', id: 6 }
    ];
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.images = [
        { link: '../img/list1.png', id: 1 },
        { link: '../img/list2.png', id: 2 },
        { link: '../img/list3.png', id: 3 },
        { link: '../img/list2.png', id: 4 },
        { link: '../img/list3.png', id: 5 },
        { link: '../img/list1.png', id: 6 }
    ];
})