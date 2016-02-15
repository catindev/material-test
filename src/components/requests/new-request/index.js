import { inject, tree } from 'state';
import styles from './newRequest.less';

import {
	changeForm,
	setDefaults,
	saveRequest,
	sendRequest,
} from './newRequest.actions';

function Controller( $mdDialog ) {
	inject('newRequestForm', this);
	inject('userType', this);

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.test2 = {
		customer: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.onFormChange = changeForm;
	this.saveRequest = saveRequest;
	this.sendRequest = sendRequest;

	setDefaults();
}

export default Controller;
