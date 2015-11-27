 angular.module('MyApp',['appRoutes','main','authservice','userCtrl','userservice','storyservice','storyCtrl','event','display','join','sponsor','template'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})

