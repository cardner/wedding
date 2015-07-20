'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wedding', {
        url: '/wedding',
        templateUrl: 'app/wedding/wedding.html',
        controller: 'WeddingCtrl',
        data : { pageTitle: 'RSVP and come celebrate with us | Williamson / Cardneau Wedding' }
      });
  }).controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoDirections = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('directions');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);
