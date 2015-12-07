todoApp.controller('todoCtrl', function($scope) {

  $scope.list = [
    {'name': 'Shopping', 'complete': false},
    {'name': 'Cleaning', 'complete': false}
  ];

  $scope.completed = [];
  $scope.active = [];

  $scope.tab = 1;

  $scope.setTab = function(num) {
    $scope.updateAll();
    $scope.tab = num;
  };

  $scope.addTask = function(task) {
    $scope.list.push({'name':task, 'complete': false})
  };

  $scope.deleteTask = function(array, task){
    var index = array.indexOf(task);
    array.splice(index,1)
    $scope.updateAll();
  };

  $scope.updateAll = function() {
    $scope.completeTasks();
    $scope.incompleteTasks();
  }

  $scope.completeTasks = function() {
    $scope.completed = $scope.list.filter(function(task){return task.complete});
  };

  $scope.incompleteTasks = function() {
    $scope.active = $scope.list.filter(function(task) {return !task.complete});
  };

  $scope.uncheckAll= function() {
    $scope.completed.forEach(function(task) {
      task.complete = false;
    })
    $scope.updateAll();
  };

  $scope.deleteAll = function() {
    $scope.list = [];
    $scope.updateAll();
  };

  $scope.deleteCompleted = function() {
    $scope.completed.forEach(function(task) {
      $scope.deleteTask($scope.list, task);
      $scope.updateAll();
    });
  };

});
