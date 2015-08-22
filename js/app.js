/**
 * Created by Parag on 22/08/15.
 */

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * Module definition for the appApp module.
 */

(function () {
    'use strict';

     angular.module('app', ['ui.router','ngMaterial','ngMessages','app.main','app.home'])
     .config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider,$locationProvider, $mdThemingProvider, $mdIconProvider, $httpProvider) {

        $urlMatcherFactoryProvider.strictMode(false);
       // $locationProvider.html5Mode(true);

             // set the default palette name
             var defaultPalette = 'blue';
             // define a palette to darken the background of components
             var greyBackgroundMap = $mdThemingProvider.extendPalette(defaultPalette, {'A100': 'fafafa'});

             $mdThemingProvider.definePalette('grey-background', greyBackgroundMap);
             $mdThemingProvider.setDefaultTheme(defaultPalette);

             // customize the theme
             $mdThemingProvider
                 .theme(defaultPalette)
                 .primaryPalette(defaultPalette)
                 .accentPalette('pink')
                 .backgroundPalette('grey-background');

             var spritePath = 'bower_components/material-design-icons/sprites/svg-sprite/';
             $mdIconProvider.iconSet('navigation', spritePath + 'svg-sprite-navigation.svg');
             $mdIconProvider.iconSet('action', spritePath + 'svg-sprite-action.svg');
             $mdIconProvider.iconSet('content', spritePath + 'svg-sprite-content.svg');
             $mdIconProvider.iconSet('toggle', spritePath + 'svg-sprite-toggle.svg');
             $mdIconProvider.iconSet('alert', spritePath + 'svg-sprite-alert.svg');





        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];


        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: "js/main/main.html",
                controller:"mainController",
                abstract:true

            })
            .state('app.home',{
                url:"/home",
                templateUrl:"js/home/home.html",
                controller:"homeController"
            })



    })
    .run(function($rootScope, $state){
    })

})();
