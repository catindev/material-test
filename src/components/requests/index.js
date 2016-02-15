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
	actionsForm,
	attach
} from 'components/requests/new-request/forms';

import serviceList from 'components/requests/new-request/services/select';
import servicesModel from 'components/requests/new-request/services/model.service';

import localdate from 'components/requests/common/localdate-filter';
import priority from 'components/requests/common/priority-filter';
import confidential from 'components/requests/common/confidential-filter';

import requestsList from 'components/requests/requests-list';
import newRequestController from 'components/requests/new-request';

import requestsModel from './model.service';

// Common
import routesConfig from './routes.config';
import requests from './requests.component';

export default angular

	.module( 'app.requests', [
		'ngAnimate',
		'ngSanitize',
		'ngRoute',
		'data-table',
		'ngFileUpload'
	])

	.config( routesConfig )

	// new request form definitions
	.component('initiatorForm', initiatorForm )
	.component( 'customerForm', customerForm )

	.component( 'servicesForm', servicesForm )
	.service( 'servicesModel', servicesModel )

	.component( 'priorityForm', priorityForm )
	.component( 'descriptionForm', descriptionForm )
	.component( 'actionsForm', actionsForm )
	.component( 'serviceList', serviceList )
	.component( 'attach', attach )

	.service( 'requestsModel', requestsModel )

	.component( 'searchFilter', searchFilter )
	.component( 'requestsList', requestsList )
	.component( 'requests', requests )

	.filter( 'localdate', localdate )
	.filter( 'priority', priority )
	.filter( 'confidential', confidential )

	.controller( 'newRequestController', newRequestController )
	.name;
