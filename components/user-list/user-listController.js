'use strict';


cs142App.controller('UserListController', ['$scope', UserListController]);

function UserListController($scope) {
    $scope.main.title = 'Users';
    console.log('window.cs142models.userListModel()', window.cs142models.userListModel());
	var users=window.cs142models.userListModel();
	var self=this;
	self.users=users;
	var selected;
	self.selectUser=function ( user ) {
    	self.selected = user;
    }
}




