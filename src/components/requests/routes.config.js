// TODO: move to common
const checkSession = ($q) => {
	//	if (!authService.check() ) $location.path('/');
	return $q.when('session-resolved');
};

class controller {
	constructor(session){
		this.session = session;
	}
}

const routesConfig = $routeProvider => {
	let options = {
		template : '<requests session="home.session"></requests>',
		resolve: { session: checkSession },
		controller,
		controllerAs: 'requests'
	};

	$routeProvider.when('/', options);
};

routesConfig.$inject = [ '$routeProvider' ];

export default routesConfig;
