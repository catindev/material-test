import { inject, tree } from 'state';
import styles from './newRequest.less';
import {
	getProcessGroups,
	changeServices
} from './services/actions';

function Controller( $mdDialog ) {

	inject('newRequestServices', this);

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	this.change = changeServices;

	///

	getProcessGroups();

}

export default Controller;
