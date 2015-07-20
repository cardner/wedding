'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('travel', {
        url: '/wedding/travel',
        templateUrl: 'app/wedding/travel/travel.html',
        controller: 'TravelCtrl',
        data : { pageTitle: 'How to get to the wedding | Williamson / Cardneau Wedding' }
      });
  });
