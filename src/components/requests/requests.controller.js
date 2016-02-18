import { inject, tree } from 'state';

import styles from './requests.less';

import newRequestTemplate from './new-request/new.tpl.html';
import config from './common/dataConfig';

function Controller( $mdDialog, $scope ) {

    tree.set('requestsFeed', this.data);
    tree.set('userInfo', this.session.data);
    this.styles = styles;
    this.dataOptions = config;

    this.newRequestForm = newRequestForm;
    this.udRequestForm = udRequestForm;

    $scope.$watch(
        () => tree.select('requestsFeed').get(),
        feed => {
            if (!feed) return;
            this.data = tree.select('requestsFeed').get();
        }
    );

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
