const checkSession = ($http) => {
	//	if (!authService.check() ) $location.path('/');
	return $http.get('api/user/_current');
};

checkSession.$inject = [ '$http' ];

export default checkSession;
