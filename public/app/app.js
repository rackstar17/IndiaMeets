 angular.module('MyApp',['appRoutes','main','authservice','userCtrl','userservice','storyservice','storyCtrl','event','display','join','sponsor'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})

