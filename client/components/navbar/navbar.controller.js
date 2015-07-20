'use strict';

angular.module('weddingApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Our Wedding',
      'link': '/wedding'
    },
    {
      'title': 'About Us',
      'link': '/wedding/about'
    },
    {
      'title': 'Travel',
      'link': '/wedding/travel'
    },
    {
      'title': 'Registries',
      'link': '/wedding/registries'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
