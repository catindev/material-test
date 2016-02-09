const routing = ($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({ redirectTo: '/' });
};

routing.$inject = [ '$routeProvider', '$locationProvider' ];

export default routing;
