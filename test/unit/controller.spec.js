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

    it('should create task list with 2 default tasks', function() {
      expect(scope.list.length).toBe(2);
    });

    it('should have empty completed array', function() {
      expect(scope.completed.length).toBe(0);
    });

    it('can add a task', function() {
      scope.addTask('new task')
      expect(scope.list.length).toBe(3);
    });

    it('can delete a task', function() {
      scope.deleteTask(scope.list, scope.list[0]);
      expect(scope.list.length).toBe(1);
    });

    it('can retrieve complete tasks', function() {
      scope.list[0].complete = true;
      scope.updateAll();
      expect(scope.completed.length).toBe(1);
    });

    it('can retrieve active tasks', function() {
      scope.list[0].complete = true;
      scope.updateAll();
      expect(scope.active.length).toBe(1);
    });

    it('can uncheck all boxes', function() {
      scope.list[0].complete = true;
      scope.updateAll();
      expect(scope.completed.length).toBe(1);
      scope.uncheckAll();
      expect(scope.completed.length).toBe(0);
      expect(scope.active.length).toBe(2);
    });

    it('can delete all tasks', function() {
      scope.deleteAll();
      expect(scope.list.length).toBe(0);
    });

    it('can delete just completed tasks', function() {
      scope.list[0].complete = true;
      scope.updateAll();
      scope.deleteCompleted();
      expect(scope.list.length).toBe(1);
    });

  });
});
