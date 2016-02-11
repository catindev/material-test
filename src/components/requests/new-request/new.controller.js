import styles from './newRequest.less';

function Controller($mdDialog) {

	this.styles = styles;
	this.dialog = $mdDialog;

	this.test1 = {
		initiator: 'Пятилова',
		bdirection: 'Бизнес-направление',
		bdevelopment: 'Блок развития'
	}

}

export default Controller;
