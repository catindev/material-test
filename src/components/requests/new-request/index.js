import { inject, tree } from 'state';
import styles from './newRequest.less';

import {
	changeForm,
	setDefaults,
	saveRequest
} from './newRequest.actions';

function Controller( $mdDialog ) {
	inject('newRequestForm', this);

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.onFormChange = changeForm;
	this.saveRequest = saveRequest;

	setDefaults();
}

export default Controller;
