'use strict';

/* Controllers */

angular.module('todoApp.controllers', [])
  .controller('todoController', ["$scope", "$filter", function($scope, $filter) {

  	$scope.newTask = "";

  	$scope.pendingCount = 3;

  	$scope.taskList = [
  		{description: "Get dinosaur as a pet" , done: false},
  		{description: "Call somebody to shedule meeting" , done: false},
  		{description: "Buy some tickets" , done: false}
  	];

  	$scope.addTodo = function () {
		$scope.taskList.push({description : $scope.newTask , done : false });
		$scope.newTask = "";//Reset the text field.
	};

    $scope.deleteTodo = function  (index) {
		$scope.taskList.splice(index, 1);
	};

	$scope.$watch('taskList', function () {
		$scope.pendingCount =  $filter('filter')($scope.taskList, {done: false}).length;
	}, true);

	$scope.clearCompleted = function () {
		$scope.taskList = $filter('filter')($scope.taskList, {done: false});
	};

  }]);