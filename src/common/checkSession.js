const checkSession = ($q) => {
	//	if (!authService.check() ) $location.path('/');
	return $q.when('session-resolved');
};

checkSession.$inject = [ '$q' ];

export default checkSession;
