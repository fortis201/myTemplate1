var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/blog', {templateUrl: '../partials/blog.html'})
		.when('/projects', {templateUrl: '../partials/projects.html'})
		// .otherwise({redirectTo: '/'});
})

 // *** Factory/ies *** //
myApp.factory('mainFactory', function ($http, $location) {
	var factory = {};

	return factory;
})


 // *** Controller/s *** //
myApp.controller('navController', function ($scope, $location, mainFactory) {
	// alert("hello world");
})

myApp.controller('blogController', function ($scope, $location, mainFactory) {
	alert("this is the blog");

})

myApp.controller('projectsController', function ($scope, $location, mainFactory) {
	alert("this is the projects");
})

 // *** anchor scroll snippet *** //
 myApp.controller('TestCtrl', function($scope, $location, $anchorScroll) {
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});

<a ng-click="scrollTo('foo')">Foo</a>

<div id="foo">Here you are</div>