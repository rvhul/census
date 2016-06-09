'use strict';

/**
 * @ngdoc overview
 * @name censusApp
 * @description
 * # censusApp
 *
 * Main module of the application.
 */
 var angularApp =
  angular
  .module('censusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  //Controller
  angularApp.controller("MainController", function($scope, $resource){
    var rm = this;

    // rm.getCensusData = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2012&SEX=0').query();
    // console.log(rm.getCensusData);
     rm.getTotalPopulationByCity = function(){
      console.log('hi');
      var totalPopulationResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+rm.countryName+'&time='+rm.countryYear+'&SEX=0', {key: '4e8d48e5fafb131f6cf85c0110e67f8e05b8a3d7'});
      rm.populationResponse = totalPopulationResource.query();
      console.log(rm.populationResponse);
    };


  })

  //Routes
  .config(function ($routeProvider) {
    $routeProvider
      .when('/total-pop', {
        templateUrl: 'views/about.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
