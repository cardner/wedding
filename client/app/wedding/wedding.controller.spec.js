'use strict';

describe('Controller: WeddingCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var WeddingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeddingCtrl = $controller('WeddingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
