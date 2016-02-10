function Controller($mdDialog) {
	this.close = function() {
		return $mdDialog.hide();
	}

	this.data = {
		one: {
			name: 'Пятилова',
			n: 'Бизнес-направление',
			b: 'Блок развития'
		},

		two: {
			name: 'Новиков',
			n: 'Бизнес-направление',
			b: 'Блок развития'
		}
	}
}

export default Controller;
