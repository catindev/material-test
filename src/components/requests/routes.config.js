const routesConfig = $routeProvider => {
	let options = {
		template : '<requests></requests>',
	};

	$routeProvider.when('/', options);
};

routesConfig.$inject = [ '$routeProvider' ];

export default routesConfig;
