import { inject } from 'state';

import {
	getProcessGroups,
	changeServices
} from './services.actions';

function Controller() {
    inject('newRequestServices', this);

    this.onServiceChange = data => {
        console.log('onServiceChange', data);
        changeServices(data);
    };

    ///

    getProcessGroups();
}

export default Controller;
