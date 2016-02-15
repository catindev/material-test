import { inject } from 'state';
import selects from './selects.config';

function Controller() {

    inject('newRequestServices', this);
	this.selects = selects;
    this.onServiceChange = changeServices;

    ///

    getProcessGroups();
}

export default Controller;
