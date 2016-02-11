// TODO: move to common
const checkSession = ($q) => {
	//	if (!authService.check() ) $location.path('/');
	return $q.when('session-resolved');
};

// TODO: move to FLUX
const getRequests = ($http, $q) => {
	//return $http.get('http://localhost:8080/api/request/');
	return $q.when([
		{"id":1,"number":"1","applyDate":"2016-02-10T18:11:12Z","modifyDate":"2016-02-10T18:11:12Z","header":"qweqweqqew","serviceId":850,"task":"Управление деятельностью","taskElement":"Управление деятельностью","priority":"ORDINARY","confidential":false,"executive":null,"status":"Черновик"}
	]);
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
