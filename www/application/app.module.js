angular
// app namespace
.module('app', [
	// namespace dependencies
	'app.core',
	'app.service',
	'app.constants',

	// third party dependencies
	'ui.router',
	'ui.router.router',
	'ui.router.state',
	'ui.router.util'
])
// run block
.run([function() {
	
}]);

angular
// app.core namespace
.module('app.core', [
	// namespace dependencies
	'app',
	'app.service',
	'app.constants'
])
// run block
.run([function() {

}]);

angular
// app.service namespace
.module('app.service', [
	// namespace dependencies
	'app',
	'app.core',
	'app.constants'
])
// run block
.run([function() {

}]);