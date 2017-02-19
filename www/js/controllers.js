angular.module('starter.controllers', [])

	.controller('DashCtrl', function ($scope, $http) {
		$http.get("js/config.json")
			.then(
				function (success) {

				}, function (error) {
					console.error('Getting configuration file error - ' + JSON.stringify(error, null, 2));
				}
			)
		;
	})

	.controller('ChatsCtrl', function ($scope, Chats) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		$scope.chats = Chats.all();
		$scope.remove = function (chat) {
			Chats.remove(chat);
		};
	})

	.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
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
