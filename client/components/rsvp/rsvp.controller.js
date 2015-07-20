'use strict';
var app = angular.module('weddingApp');
  app.controller('RsvpCtrl', ['$scope', '$http', '$log', '$timeout', function ($scope, $http, $log, $timeout) {

  $scope.songs = [{id: 'song1'}];

  $scope.addNewSong = function() {
    var newItemNo = $scope.songs.length+1;
    $scope.songs.push({'id':'song'+newItemNo});
  };

  $scope.removeSong = function() {
    var lastItem = $scope.songs.length-1;
    $scope.songs.splice(lastItem);
  };

  $scope.rsvp = function(form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }

      // Default values for the request.
      var contactInfo = {
          'name': $scope.name,
          'email': $scope.email,
          'attending': $scope.attending,
          'numberAttending': $scope.partyNum,
          'guestName': $scope.guestname,
          'dietaryRestrictions': $scope.dietary,
          'songs': $scope.songs,
          'hotel': $scope.hotel,
          'note': $scope.note
      };

    $http({
        url: '/api/rsvps',
        method: 'POST',
        data: contactInfo,
        paramSerializer: '$httpParamSerializerJQLike'
      })
      .success(function(data, status) {
        if (status === 201) {
          $scope.name = null;
          $scope.email = null;
          $scope.attending = null;
          $scope.partyNum = null;
          $scope.guestname = null;
          $scope.dietary = null;
          $scope.songs = [{id: 'song1'}];
          $scope.hotel = null;
          $scope.note = null;
          $scope.messages = 'We have successfully recieved your rsvp, and we are excited to have you share this day with us.';
          $scope.submitted = false;
        } else {
          $scope.messages = 'Oops, i received your request, but it appears something may have gone wrong.';
          $log.error(data);
          $log.error(status);
        }
      })
      .error(function(data) {
        $scope.progress = data;
        $scope.messages = 'the internet tubes are clogged, try again later';
        $log.error(data);
      })
      .finally(function() {
        // Hide status messages after three seconds.
        $timeout(function() {
          $scope.messages = null;
        }, 3000);
      });
    };

}]);

app.directive('honeypot', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue) {
        if (ctrl.$isEmpty(modelValue)) {
        // consider empty models to be valid
        return true;
        }
        return false;
      };
    }
  };
});
