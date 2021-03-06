'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    
    var userId = Number($routeParams.userId);
    console.log('UserDetail of ', userId);
    var user=window.cs142models.userModel(userId);
    console.log('window.cs142models.userModel($routeParams.userId)',
       user);
	$scope.user=user;
  }]);
