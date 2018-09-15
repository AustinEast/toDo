var myApp = angular.module('ToDoApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.toDos = [
        {text:"Start your list.", done:true, hours: 00, minutes: 00, seconds: 00},
        {text:"Get work done.", done:true, hours: 00, minutes: 00, seconds: 00},
        
    ];
    
    $scope.addItem = function () {
        if ($scope.formText != "") {
            $scope.toDos.push({text:$scope.formText, done:false, hours: 00, minutes: 00, seconds: 00 });
        }
        $scope.formText = "";
    };
    
    $scope.clearItems = function() {
      $scope.toDos = $scope.toDos.filter(function(todo){
			return !todo.done;
		});
    };
    
}]);