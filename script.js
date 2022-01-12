var app = angular.module("myModule", [])
		.controller("myController" , function($scope){
 
	var members =[
		{name: "Sam Nyang'u", Votes: 0},
		{name: "Winnie Bgern", Votes: 0},
	];					
 
	$scope.members = members;
 
	$scope.incrementUp = function(member){
		member.Votes++;
	}
	$scope.incrementDown = function(member){
		member.Votes--;
	}
});	