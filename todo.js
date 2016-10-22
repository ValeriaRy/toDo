var toDoApp = angular.module("toDoApp", []);

toDoApp.controller("ToDoCtrl", function($scope){
		if (localStorage.getItem("ListTodo")) {
			$scope.data = JSON.parse(localStorage.getItem("ListTodo"));
		} else {
			$scope.data = [];
		}
		
		$scope.description = "";
		
		$scope.AddToDo = function() {
			$scope.data.push({
				name: $scope.name,
				description: $scope.descriptions,
				date: $scope.date,
				completed: $scope.completed
			});
			
			localStorage.setItem("ListTodo", JSON.stringify($scope.data));
		}
		
		$scope.SetColor = function(completed) {
			if (completed) {
				return "color: green";
			} else {
				return "color: red"; 
			}
		}
		
		$scope.showDescriptions = function(row) {
			$scope.description = row.description; 
		}
});