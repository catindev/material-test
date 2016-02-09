import 'angular-material/angular-material.min.css';

// Pages
import requests from 'components/requests';

// Common
import routerConfig from 'common/routes.config';

angular
	.module('app', [
		'ngMaterial',
		'ngSanitize',
		'ngRoute',
		//'ngMdIcons',
		requests
	])
	.config( routerConfig );

const bootstrap = () => angular.bootstrap(document, [ 'app' ]);

document.addEventListener('DOMContentLoaded', bootstrap);
