angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {

	friendService.getFriends().then(function(response) {
		console.log(response)
		$scope.currentUser = response.data.user
		$scope.friends = response.data.friends
		console.log($scope.friends);
		console.log($scope.currentUser);
	})

});
