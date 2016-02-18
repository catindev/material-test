import 'angular-material/angular-material.min.css';
import 'components/requests/common/table.css';

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
import serviceList from 'components/requests/new-request/services/select';

import localdate from 'components/requests/localdate';
import priority from 'components/requests/common/priority-filter';
import confidential from 'components/requests/common/confidential-filter';
import requestsList from 'components/requests/requests-list';
import newRequestController from 'components/requests/new-request';


// Common
import routesConfig from './routes.config';
import requests from './requests.component';

export default angular

	.module( 'app.requests', [
		'ngAnimate',
		'ngSanitize',
		'ngRoute',
		'data-table',
	])

	.config( routesConfig )

	// new request form definitions
	.component('initiatorForm', initiatorForm )
	.component( 'customerForm', customerForm )
	.component( 'servicesForm', servicesForm )
	.component( 'priorityForm', priorityForm )
	.component( 'descriptionForm', descriptionForm )
	.component( 'actionsForm', actionsForm )
	.component( 'serviceList', serviceList )

	.component( 'searchFilter', searchFilter )
	.component( 'requestsList', requestsList )
	.component( 'requests', requests )

	.filter( 'priority', priority )
	.filter( 'confidential', confidential )


	.filter( 'localdate', localdate )

	.controller( 'newRequestController', newRequestController )

	.name;
