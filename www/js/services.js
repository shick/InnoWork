angular.module('starter.services', [])

	.factory('Partecipants', function ($http) {
		// Might use a resource here that returns a JSON array
		// $http({
		// 	method: 'GET',
		// 	url: "",
		// 	headers: {
		// 		'Content-Type': 'application/json; charset=utf-8'
		// 	},
		// 	timeout: 100000
		// }).then(
		// 	function (success) {
		//
		// 	}, function (error) {
		//
		// 	}
		// );

		// Some fake testing data
		var partecipants = [{
			id: 0,
			name: 'Ben Sparrow',
			lastText: 'You on your way?',
			face: 'img/ben.png'
		}, {
			id: 1,
			name: 'Max Lynx',
			lastText: 'Hey, it\'s me',
			face: 'img/max.png'
		}, {
			id: 2,
			name: 'Adam Bradleyson',
			lastText: 'I should buy a boat',
			face: 'img/adam.jpg'
		}, {
			id: 3,
			name: 'Perry Governor',
			lastText: 'Look at my mukluks!',
			face: 'img/perry.png'
		}, {
			id: 4,
			name: 'Mike Harrington',
			lastText: 'This is wicked good ice cream.',
			face: 'img/mike.png'
		}];

		return {
			all: function () {
				return partecipants;
			},
			remove: function (user) {
				partecipants.splice(partecipants.indexOf(user), 1);
			},
			get: function (userId) {
				for (var i = 0; i < partecipants.length; i++) {
					if (partecipants[i].id === parseInt(userId)) {
						return partecipants[i];
					}
				}
				return null;
			}
		};
	})

	.factory('Schedule', function ($http) {
		// Might use a resource here that returns a JSON array
		// $http({
		// 	method: 'GET',
		// 	url: "",
		// 	headers: {
		// 		'Content-Type': 'application/json; charset=utf-8'
		// 	},
		// 	timeout: 100000
		// }).then(
		// 	function (success) {
		//
		// 	}, function (error) {
		//
		// 	}
		// );

		// Some fake testing data

		var schedule = [
			{
				date: "Day 1",
				schedule: {
					day: [{
						id: 3,
						daytime: "9:00",
						title: 'Perry Governor',
						subtitle: 'Look at my mukluks!'
					}, {
						id: 4,
						daytime: "12:00",
						title: 'Mike Harrington',
						subtitle: 'This is wicked good ice cream.'
					}]
				}
			},
			{
				date: "Day 2",
				schedule: {
					day: [{
						id: 0,
						daytime: "10:00",
						title: 'Ben Sparrow',
						subtitle: 'You on your way?'
					}, {
						id: 1,
						daytime: "17:00",
						title: 'Max Lynx',
						subtitle: 'Hey, it\'s me'
					}]
				}
			},
			{
				date: "Day 3",
				schedule: {
					day: [{
						id: 2,
						daytime: "12:00",
						title: 'Adam Bradleyson',
						subtitle: 'I should buy a boat'
					}]
				}
			},
			{
				date: "Day 4",
				schedule: {
					day: [{
						id: 3,
						daytime: "8:00",
						title: 'Perry Governor',
						subtitle: 'Look at my mukluks!'
					}, {
						id: 4,
						daytime: "20:00",
						title: 'Mike Harrington',
						subtitle: 'This is wicked good ice cream.'
					}]
				}
			}
		];

		return {
			all: function () {
				return schedule;
			},
			remove: function (schedule) {
				schedule.splice(schedule.indexOf(schedule), 1);
			},
			get: function (eventId) {
				for (var i = 0; i < schedule.length; i++) {
					if (schedule[i].id === parseInt(eventId)) {
						return schedule[i];
					}
				}
				return null;
			}
		};
	})
;
