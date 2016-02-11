import mock from './common/mocks/dataMock';
import checkSession from 'common/checkSession';

// TODO: may be need move to FLUX
const getRequests = ($http, $q) => {
	//return $http.get('http://localhost:8080/api/request/');
	return $q.when( mock );
};
getRequests.$inject = ['$http', '$q'];

function controller(session, requests) {
	this.session = session;
	this.requests = requests;
}
controller.$inject = ['session', 'requests'];

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
