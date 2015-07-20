'use strict';

describe('Controller: RegistriesCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var RegistriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistriesCtrl = $controller('RegistriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
