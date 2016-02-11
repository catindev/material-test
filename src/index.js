import 'angular-data-table/release/dataTable.css';
import 'angular-data-table/release/material.css';
import 'common/theme.css';

// Pages
import requests from 'components/requests';

// Common
import themeConfig from 'common/angular-material-theme.config';
import routerConfig from 'common/routes.config';

angular
	.module('app', [
		'ngMaterial',
		'ngSanitize',
		'ngRoute',
		requests
	])
	.config( routerConfig )
	.config( themeConfig );

const bootstrap = () => angular.bootstrap(document, [ 'app' ]);

document.addEventListener('DOMContentLoaded', bootstrap);
