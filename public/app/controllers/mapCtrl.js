angular.module('map',[])

.controller('mapCtrl',function($scope) {
	$scope.eventheading = localStorage.getItem('clickedEventName');
});