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
          'entry.1339770440': $scope.name,
          'entry.1724497109': $scope.email,
          'entry.962079817': $scope.attending,
          'entry.1713062384': $scope.partyNum,
          'entry.1861085385': $scope.guestname,
          'entry.708928610': $scope.dietary,
          'entry.2067827130': $scope.songs,
          'entry.971098826': $scope.hotel,
          'entry.245907308': $scope.note,
          'submit': 'Submit'
      };

    $http({
        //url: 'https://script.google.com/macros/s/AKfycbwkBSFdTMdJ9n-8RQWVFH25Pq0Zre58i2hFG1jzqXAwmzajrks/exec?prefix=json',
        // url: 'https://docs.google.com/forms/d/18uoEQT-57rPAbvvypa02MDqMsooTE7o4eL0rXGS76m4/formResponse?entry.1339770440=' + $scope.name + '&entry.1724497109=' + $scope.email + '&entry.962079817='+ $scope.attending + '&entry.1713062384='+ $scope.partyNum + '&entry.1861085385=' + $scope.guestname + '&entry.708928610=' + $scope.dietary + '&entry.2067827130=' + $scope.songs + '&entry.971098826=' + $scope.hotel + '&entry.245907308=' + $scope.note + '$submit=Submit',
        url: 'https://docs.google.com/a/williamson-cardneau.com/forms/d/18uoEQT-57rPAbvvypa02MDqMsooTE7o4eL0rXGS76m4/formResponse?ifq',
        method: 'POST',
        data: contactInfo,
        dataType: 'xml',
        //paramSerializer: '$httpParamSerializerJQLike',
        withCredentials: true,
        headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET',
                    'Access-Control-Allow-Headers': 'status'
        }
      })
      .success(function(data, status, prefix) {
        if (status === 201 || status === 200 || status === 0) {
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
          $scope.messages = 'Oops, i received your request, but it appears the monkies have miss-filed it.';
          // $log.error(prefix);
          // $log.error(status);
        }
      })
      .error(function(data, prefix) {
        $scope.progress = data;
        $scope.messages = 'the internet tubes are clogged, try again later';
        //  $log.error(prefix);
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
