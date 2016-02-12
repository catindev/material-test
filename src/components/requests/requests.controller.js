import { inject, tree } from 'state';

import styles from './requests.less';

import newRequestTemplate from './new-request/new.tpl.html';
import config from './common/dataConfig';

function Controller( $mdDialog ) {

    this.styles = styles;
    this.dataOptions = config;

    this.newRequestForm = newRequestForm;
    this.udRequestForm = udRequestForm;

    ///



    function newRequestForm() {
        tree.set('userType', false);
        $mdDialog.show({
            template: newRequestTemplate,
            controller: 'newRequestController',
            controllerAs: 'newRequest'
        });
    }

    function udRequestForm() {
        tree.set('userType', true);
        $mdDialog.show({
            template: newRequestTemplate,
            controller: 'newRequestController',
            controllerAs: 'newRequest'
        });
    }

}

export default Controller;
