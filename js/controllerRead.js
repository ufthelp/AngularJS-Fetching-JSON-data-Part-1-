//Creat app module
var app = angular.module('myApp',[])
//Creating the controller constructor
app.controller('familyCtrl',function($scope,$http){
	//Calling the get method of service 
	$http.get("data/family.json").then(function(response){
		$scope.myData = response.data;
	});

});