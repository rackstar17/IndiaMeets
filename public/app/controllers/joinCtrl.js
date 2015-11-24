angular.module('join',[])

.controller('joinCtrl', function($scope,$http,$location) {
	
	$scope.clickedEvent = {
		_id: localStorage.getItem('clickedEventId') ,
		name: localStorage.getItem('clickedEventName') ,
		creator: localStorage.getItem('clickedEventCreator') ,
		description: localStorage.getItem('clickedEventDescription') ,
		date: localStorage.getItem('clickedEventDate') ,
		time: localStorage.getItem('clickedEventTime') ,
		location: localStorage.getItem('clickedEventLocation'),
        
	}; 

	$scope.joinEvent = function() {

		$http({
			method:'POST' ,
			data: $scope.clickedEvent ,
			url: '/api/join'
		}).then(function successCallback() {
			console.log("event joined");
            $location.path('/displayevents');
		},function errorCallback() {
			console.log("sorry could not join the event");
		});
       
	}

   
});