angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl'
	});

	$urlRouterProvider.otherwise('/');

});
angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', {name:user.name, password:user.password})
    };

    this.getFriends = function() {
    	return $http.get('/api/profiles')
    };

});

angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}

			friendService.getFriends(user).then(function(response) {
				console.log(response)
				$scope.currentUser = response.data
				$scope.friends = response.data.friends
				console.log($scope.friends);
				console.log($scope.currentUser);


			})

		});



	}

});

angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});