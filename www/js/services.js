angular.module('starter.services', [])

    .factory('OrderedPartecipants', function($http) {
        var partecipants = [];
		var serverName = "";
		$http.get("/js/config.json").then(
			function (response) {
				serverName = response.data.server;
			}, function (error) {
				console.log("Get config.json error - " + JSON.stringify(error));
			}
		);

        partecipants = [{"foto":"http://docenti.unisa.it/uploads/rescue/foto/005768.jpg","cognome":"Foggia","areaInteresse":[{"area":"Computer Vision"}],"nome":"Pasquale","hIndex":"110"},{"foto":"http://docenti.unisa.it/uploads/rescue/foto/024950.jpg","cognome":"Saggese","areaInteresse":[{"area":"Computer Vision"}],"nome":"Alessia","hIndex":"44"},{"foto":"http://docenti.unisa.it/uploads/rescue/foto/005501.jpg","cognome":"Vento","areaInteresse":[{"area":"Mobile Programming"},{"area":"Computer Vision"},{"area":"Embedded System"}],"nome":"Mario","hIndex":"203"}];

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

	.factory('Partecipants', function ($http) {

		var partecipants = [];
		var serverName = "";
		$http.get("/js/config.json").then(
			function (response) {
				serverName = response.data.server;
			}, function (error) {
				console.log("Get config.json error - " + JSON.stringify(error));
			}
		);

		// Might use a resource here that returns a JSON array
		 /*$http({
		 	method: 'GET',
		 	url: $scope.serverName + "/convegnoServer/partecipants/all",
		 	headers: {
		 		'Content-Type': 'application/json; charset=utf-8',
				 'Access-Control-Allow-Origin' :'*'
		 	},
		 	timeout: 100000
		 }).then(
		 	function (response) {
				partecipants = response.data; 
		 	}, function (error) {
				console.log("get part error - " + JSON.stringify(error, null, 2));
		 	}
		 );*/

		 partecipants = [  
      {  
		 "id": 1,
         "foto":"http://docenti.unisa.it/uploads/rescue/foto/005501.jpg",
         "cognome":"Vento",
         "areaInteresse":[  
            {  
               "area":"Mobile Programming"
            },
            {  
               "area":"Computer Vision"
            },
            {  
               "area":"Embedded System"
            }
         ],
         "nome":"Mario",
         "hIndex":"203"
      },
      {  
		"id": 2,
         "foto":"http://docenti.unisa.it/uploads/rescue/foto/024950.jpg",
         "cognome":"Saggese",
         "areaInteresse":[  
            {  
               "area":"Computer Vision"
            }
         ],
         "nome":"Alessia",
         "hIndex":"44"
      },
      {  
		 "id": 3,
         "foto":"http://docenti.unisa.it/uploads/rescue/foto/005768.jpg",
         "cognome":"Foggia",
         "areaInteresse":[  
            {  
               "area":"Computer Vision"
            }
         ],
         "nome":"Pasquale",
         "hIndex":"110"
      }
   ];

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

		var schedule = [];
		var serverName = "";
		$http.get("/js/config.json").then(
			function (response) {
				serverName = response.data.server;
			}, function (error) {
				console.log("Get config.json error - " + JSON.stringify(error));
			}
		);

		// Might use a resource here that returns a JSON array
		 /*$http({
		 	method: 'GET',
		 	url: $scope.serverName + "/convegnoServer/schedule/all",
		 	headers: {
		 		'Content-Type': 'application/json; charset=utf-8'
		 	},
		 	timeout: 100000
		 }).then(
		 	function (success) {
		
		 	}, function (error) {
		
		 	}
		 );*/

		// Some fake testing data

		schedule = [  
   {  
      "descrizione":"descrizione 1",
      "titolo":"titolo 1",
      "data":"2017-02-22",
      "sala":"1",
      "oraInizio":"15:00:00",
      "relatori":[  
         {  
            "cognome":"Vento",
            "nome":"Mario",
            "hIndex":"203"
         },
         {  
            "cognome":"Saggese",
            "nome":"Alessia",
            "hIndex":"44"
         }
      ]
   },
   {  
      "descrizione":"descrizione 2",
      "titolo":"titolo 2",
      "data":"2017-02-22",
      "sala":"2",
      "oraInizio":"15:30:00",
      "relatori":[  
         {  
            "cognome":"Vento",
            "nome":"Mario",
            "hIndex":"203"
         }
      ]
   },
   {  
      "descrizione":"descrizione 3",
      "titolo":"titolo 3",
      "data":"2017-02-22",
      "sala":"2",
      "oraInizio":"20:02:00",
      "relatori":[  
         {  
            "cognome":"Vento",
            "nome":"Mario",
            "hIndex":"203"
         },
         {  
            "cognome":"Saggese",
            "nome":"Alessia",
            "hIndex":"44"
         },
         {  
            "cognome":"Foggia",
            "nome":"Pasquale",
            "hIndex":"110"
         }
      ]
   },
   {  
      "descrizione":"descrizione 4",
      "titolo":"titolo 4",
      "data":"2017-02-22",
      "sala":"3",
      "oraInizio":"20:01:00",
      "relatori":[  
         {  
            "cognome":"Vento",
            "nome":"Mario",
            "hIndex":"203"
         }
      ]
   },
   {  
      "descrizione":"descrizione 5",
      "titolo":"titolo 5",
      "data":"2017-02-22",
      "sala":"3",
      "oraInizio":"20:04:00",
      "relatori":[  
         {  
            "cognome":"Vento",
            "nome":"Mario",
            "hIndex":"203"
         }
      ]
   },
   {  
      "descrizione":"descrizione 6",
      "titolo":"titolo 6",
      "data":"2017-02-22",
      "sala":"1",
      "oraInizio":"19:50:00",
      "relatori":[  
         {  
            "cognome":"Saggese",
            "nome":"Alessia",
            "hIndex":"44"
         },
         {  
            "cognome":"Foggia",
            "nome":"Pasquale",
            "hIndex":"110"
         }
      ]
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
