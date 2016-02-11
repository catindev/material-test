import mock from './common/mocks/dataMock';

// TODO: move to common
const checkSession = ($q) => {
	//	if (!authService.check() ) $location.path('/');
	return $q.when('session-resolved');
};

// TODO: move to FLUX
const getRequests = ($http, $q) => {
	//return $http.get('http://localhost:8080/api/request/');
	return $q.when( mock );
};

function controller(session, requests) {
	this.session = session;
	this.requests = requests;
}

const routesConfig = $routeProvider => {
	let options = {
		template : '<requests session="r.session" data="r.requests"></requests>',
		resolve: {
			session: checkSession,
			requests: getRequests
		},
		controller,
		controllerAs: 'r'
	};

	$routeProvider.when('/', options);
};

routesConfig.$inject = [ '$routeProvider' ];

export default routesConfig;
