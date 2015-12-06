'use strict';

/* jasmine specs for controllers go here */
describe('todoApp controllers', function() {

  describe('todoCtrl', function(){
    var scope, ctrl;

    beforeEach(module('todoApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('todoCtrl', {$scope:scope});
    }));


    it('should create "phones" model with 3 phones', function() {
      expect(scope.list.length).toBe(2);
    });


    // it('should set the default value of orderProp model', function() {
    //   expect(scope.orderProp).toBe('age');
    // });
  });
});
