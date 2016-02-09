
//	Subcomponents
import searchFilter from 'components/requests/search-filter';
import newRequestCtrl from 'components/requests/new-request/new.controller.js';
// import one from 'components/requests/one';
// import two from 'components/requests/two';

// Common
import routesConfig from './routes.config';
import requests from './requests.component';

// Requests Module
export default angular
	.module('app.requests', [ 'ngAnimate', 'ngSanitize', 'ngRoute' ])
	.config(routesConfig)
	.component('searchFilter', searchFilter)
	.component('requests', requests)
	.controller('newRequestController', newRequestCtrl)
	.name;
