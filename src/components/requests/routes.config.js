import checkSession from 'common/checkSession';

const getRequests = ($http, $q) => {
	return $http.get('api/request/').catch( err=>$q.when([]) );
};
getRequests.$inject = ['$http', '$q'];

function controller(session, requests) {
	this.session = session;
	this.requests = requests.data;
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
