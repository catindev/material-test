function Controller($mdDialog) {
	this.close = function() {
		return $mdDialog.hide();
	}
}

export default Controller;
