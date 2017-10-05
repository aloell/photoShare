'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    
    var userId = Number($routeParams.userId);
    console.log('UserPhoto of ', $routeParams.userId);

    
	var self=this;
	var photos=window.cs142models.photoOfUserModel(userId);
	console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
       photos);
	$scope.photos=photos;


  //$scope.myInterval = 5000;
  $scope.noWrapSlides = true;
  $scope.active = 1;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 650 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/390',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  $scope.messages=photos[$scope.active].comments;
  console.log("messages:",$scope.messages);
}]);
