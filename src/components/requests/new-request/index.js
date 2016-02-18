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
	inject('userInfo', this);

	console.log( 'userInfo', this.userType.get() );

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test = {
		initiator: 'Пятилова',
		customer: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.onFormChange = changeForm;
	this.saveRequest = saveRequest;
	this.sendRequest = sendRequest;

	setDefaults(this.userInfo.get());
}

export default Controller;
