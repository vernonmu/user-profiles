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
