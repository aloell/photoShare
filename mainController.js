'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController as ud'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController as up'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);
    
cs142App.config(function($mdThemingProvider, $mdIconProvider){
    $mdIconProvider
    .defaultIconSet("svg/avatars.svg", 128)
    .icon("menu"       , "svg/menu.svg"        , 24)
    .icon("share"      , "svg/share.svg"       , 24)
    .icon("google_plus", "svg/google_plus.svg" , 512)
    .icon("hangouts"   , "svg/hangouts.svg"    , 512)
    .icon("twitter"    , "svg/twitter.svg"     , 512)
    .icon("phone"      , "svg/phone.svg"       , 512);

    //$mdThemingProvider.theme('default');
    //.primaryPalette('blue')
	//.accentPalette('red');

});

cs142App.controller('MainController',
    function ($scope,$mdSidenav) {
        $scope.main = {};
        $scope.main.title = {title: 'Users'};
        var self=this;
        self.toggleList=function(){
        	$mdSidenav('right').toggle();
        }
    });
