const checkSession = ($q, $http) => {
	return $http.get('api/user/_current').catch( err => $q.when(null) );
	//	if (!authService.check() ) $location.path('/');
};

checkSession.$inject = [ '$q', '$http' ];

export default checkSession;
