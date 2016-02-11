import { inject, tree } from 'state';
import styles from './newRequest.less';
import {
	getProcessGroups,
	changeServices
} from './services/actions';

import { changeForm } from './actions';

function Controller( $mdDialog ) {

	inject('newRequestServices', this);
	inject('newRequestForm', this);

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.OnServiceChange = changeServices;

	this.getForm = getForm;

	///

	function init() {
		getProcessGroups();
		tree.select('newRequestForm').set(['data', 'requester'], "Иванов");
	}

	init();

	let getForm = () => {
		// let priority = {
		// 	true: 'HIGH',
		// 	false: 'ORDINARY'
		// };
		// return {
		// 	serviceId: loginForm.serviceId.$modelValue,
		// 	requester: loginForm.requester.$modelValue,
		// 	confidential: loginForm.confidential.$modelValue,
		// 	priority: priority[ loginForm.priority.$modelValue ],
		// 	priorityReason: loginForm.priorityReason.$modelValue || "",
		// 	title: loginForm.title.$modelValue || "",
		// 	description: loginForm.description.$modelValue || "",
		// 	desiredResolutionDate: loginForm.desiredResolutionDate.$modelValue || null,
		// };
		return this.newRequestSForm;
	}

}

export default Controller;
