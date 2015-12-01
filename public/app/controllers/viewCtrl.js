angular.module('view',[])

.controller('viewCtrl', function($scope,$http,$location,$rootScope) {
	
	$scope.clickedEvent = {
		_id: localStorage.getItem('clickedEventId') ,
		name: localStorage.getItem('clickedEventName') ,
		creator: localStorage.getItem('clickedEventCreator') ,
		description: localStorage.getItem('clickedEventDescription') ,
		date: localStorage.getItem('clickedEventDate') ,
		time: localStorage.getItem('clickedEventTime') ,
		location: localStorage.getItem('clickedEventLocation'),
        imagepath: localStorage.getItem('clickedEventImagepath')
	}; 

	$scope.joinEvent = function() {

		$http({
			method:'POST' ,
			data: $scope.clickedEvent ,
			url: '/api/join'
		}).then(function successCallback(response) {
			console.log(response);
			console.log("event joined");
            //$location.path('/view');
		},function errorCallback() {
			console.log("sorry could not join the event");
		});
       
	}

	$rootScope.homeTab = 1;
	$rootScope.membersTab = 0;
	$rootScope.sponsorsTab = 0;
	$rootScope.photosTab = 0;

	$scope.init = function() {
		console.log('viewCtrl working');
		$scope.homeTabClick();
	}

	$scope.homeTabClick = function() {
		$rootScope.homeTab = 1;
		$rootScope.membersTab = 0;
		$rootScope.sponsorsTab = 0;
		$rootScope.photosTab = 0;

		var homeTabStyle = document.getElementById('home');
		homeTabStyle.className = homeTabStyle.className + " red accent-2" + " br100" + " white-text";

		var sponsorsTabStyle = document.getElementById('sponsors');
		sponsorsTabStyle.className = "";

		var photosTabStyle = document.getElementById('photos');
		photosTabStyle.className = "";

		var membersTabStyle = document.getElementById('members');
		membersTabStyle.className = "";

	}

	$scope.membersTabClick = function() {
		$rootScope.homeTab = 0;
		$rootScope.membersTab = 1;
		$rootScope.sponsorsTab = 0;
		$rootScope.photosTab = 0;

		var membersTabStyle = document.getElementById('members');
		membersTabStyle.className = membersTabStyle.className + " red accent-2" + " br100" + " white-text";

		var homeTabStyle = document.getElementById('home');
		homeTabStyle.className = "";

		var sponsorsTabStyle = document.getElementById('sponsors');
		sponsorsTabStyle.className = "";

		var photosTabStyle = document.getElementById('photos');
		photosTabStyle.className = "";
	}

	$scope.sponsorsTabClick = function() {
		$rootScope.homeTab = 0;
		$rootScope.membersTab = 0;
		$rootScope.sponsorsTab = 1;
		$rootScope.photosTab = 0;


		var sponsorsTabStyle = document.getElementById('sponsors');
		sponsorsTabStyle.className = sponsorsTabStyle.className + " red accent-2" + " br100" + " white-text";

		var photosTabStyle = document.getElementById('photos');
		photosTabStyle.className = "";

		var homeTabStyle = document.getElementById('home');
		homeTabStyle.className = "";

		var membersTabStyle = document.getElementById('members');
		membersTabStyle.className = "";


	}

	$scope.photosTabClick = function() {
		$rootScope.homeTab = 0;
		$rootScope.membersTab = 0;
		$rootScope.sponsorsTab = 0;
		$rootScope.photosTab = 1;

		var photosTabStyle = document.getElementById('photos');
		photosTabStyle.className = photosTabStyle.className + " red accent-2" + " br100" + " white-text";

		var homeTabStyle = document.getElementById('home');
		homeTabStyle.className = "";

		var membersTabStyle = document.getElementById('members');
		membersTabStyle.className = "";

		var sponsorsTabStyle = document.getElementById('sponsors');
		sponsorsTabStyle.className = "";

	}

	$scope.homeClicked = function() {
		if($rootScope.homeTab == 1) {
			return true;
		}
		return false;
	}

	$scope.membersClicked = function() {
		if($rootScope.membersTab == 1) {
			return true;
		}
		return false;
	}

	$scope.sponsorsClicked = function() {
		if($rootScope.sponsorsTab == 1) {
			return true;
		}
		return false;
	}

	$scope.photosClicked = function() {
		if($rootScope.photosTab == 1) {
			return true;
		}
		return false;
	}
   
});