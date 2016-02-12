import { inject } from 'state';
import selects from './selects.config';

import {
	getProcessGroups,
	changeServices
} from './services.actions';

function Controller() {
    inject('newRequestServices', this);
	this.selects = selects;

    this.onServiceChange = data => {
        console.log('onServiceChange', data);
        changeServices(data);
    };

    ///

    getProcessGroups();
}

export default Controller;
