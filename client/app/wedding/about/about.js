'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/wedding/about',
        templateUrl: 'app/wedding/about/about.html',
        controller: 'AboutCtrl',
        data : { pageTitle: 'About our wedding | Williamson / Cardneau Wedding' }
      });
  });
