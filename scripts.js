var myApp = angular.module('ToDoApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.toDos = [
        {text:"Start your list.", done:true},
        {text:"Get work done.", done:true},
        
    ];
    
    $scope.addItem = function () {
        if ($scope.formText != "") {
            $scope.toDos.push({text:$scope.formText, done:false});
        }
        $scope.formText = "";
    };
    
    $scope.clearItems = function() {
      $scope.toDos = $scope.toDos.filter(function(todo){
			return !todo.done;
		});
    };
}]);