angular.module('starter.controllers', [])

	.controller('HomeCtrl', function ($scope, $http) {
		$http.get("js/config.json")
			.then(
				function (response) {
					$scope.description = response.data.meetingDescription;
					$scope.location = response.data.meetingLocation;
					$scope.presenters = response.data.meetingPresenters;
				}, function (error) {
					console.error('Getting configuration file error - ' + JSON.stringify(error, null, 2));
				}
			)
		;
	})

	.controller('PartecipantsCtrl', function ($scope, Partecipants) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		$scope.partecipants = Partecipants.all();
		$scope.remove = function (partecipant) {
			Partecipants.remove(partecipant);
		};
	})

	.controller('PartecipantDetailCtrl', function ($scope, $stateParams, Partecipants) {
		$scope.partecipant = Partecipants.get($stateParams.userId);
	})

	.controller('ScheduleCtrl', function ($scope, Schedule) {
		// $scope.settings = {
		// 	enableFriends: true
		// };

		$scope.schedule = Schedule.all();
		$scope.remove = function (event) {
			Schedule.remove(event);
		}
	});
