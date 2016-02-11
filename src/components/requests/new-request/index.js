import { inject, tree } from 'state';
import styles from './newRequest.less';

function Controller( $mdDialog ) {
	inject('newRequestForm', this);
	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

	///

	tree.select('newRequestForm')
			.set(['data', 'requester'], "Иванов");


}

export default Controller;
