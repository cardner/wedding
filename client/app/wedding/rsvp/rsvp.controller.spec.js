'use strict';

describe('Controller: RsvpCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var RsvpCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RsvpCtrl = $controller('RsvpCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
