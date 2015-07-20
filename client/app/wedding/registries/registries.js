'use strict';

angular.module('weddingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('registries', {
        url: '/wedding/registries',
        templateUrl: 'app/wedding/registries/registries.html',
        controller: 'RegistriesCtrl',
        data : { pageTitle: 'Want to get us someting? | Williamson / Cardneau Wedding' }
      });
  });
