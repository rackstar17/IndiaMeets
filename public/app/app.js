 angular.module('MyApp',['appRoutes','main','authservice','userCtrl','userservice','storyservice','storyCtrl','event','display','view','sponsor','map'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})

