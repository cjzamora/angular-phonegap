angular
// load app namespace
.module('app')
// route configuration
.config(function($stateProvider, $urlRouterProvider) {
	// if any url does not match
	$urlRouterProvider.otherwise('/');

	// set up application states
	$stateProvider
	// root scope
	.state('root', {
		abstract : true,
		views  	 : {
			'header' 	: { templateUrl : 'application/views/header.html' },
			'footer' 	: { templateUrl : 'application/views/footer.html' }
		}
	})
	// home scope
	.state('home', {
		url 	: '/',
		parent 	: 'root',
		views 	: { 
			'main@' : { template 	: 'HOMEPAGE' }
		}
	})
})
// run block
.run(runConfigRouter);

// inject dependencies
runConfigRouter.$inject = ['$rootScope', '$state', '$stateParams'];

// run config router function
function runConfigRouter($rootScope, $state, $stateParams) {
	// set state to root scope
	$rootScope.$state 		= $state;
	// set state params to root scope
	$rootScope.$stateParams = $stateParams;
};