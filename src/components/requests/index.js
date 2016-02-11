
/* Subcomponents */
import searchFilter from 'components/requests/search-filter';

// New request components
import {
	initiatorForm,
	customerForm,
	servicesForm,
	priorityForm,
	descriptionForm,
	actionsForm
} from 'components/requests/new-request/forms';
import newRequestCtrl from 'components/requests/new-request/new.controller.js';

// Common
import routesConfig from './routes.config';
import requests from './requests.component';

export default angular
	.module( 'app.requests', [ 'ngAnimate', 'ngSanitize', 'ngRoute' ] )
	.config( routesConfig )

	// new request form definitions
	.component('initiatorForm', initiatorForm )
	.component( 'customerForm', customerForm )
	.component( 'servicesForm', servicesForm )
	.component( 'priorityForm', priorityForm )
	.component( 'descriptionForm', descriptionForm )
	.component( 'actionsForm', actionsForm )

	.component( 'searchFilter', searchFilter )
	.component( 'requests', requests )
	.controller( 'newRequestController', newRequestCtrl )
	.name;
