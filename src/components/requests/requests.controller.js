import styles from './requests.less';

import newRequestTemplate from './new-request/new.tpl.html';
import config from './common/dataConfig';

//import { getRequests, setUser } from './requests.actions';

function Controller( $mdDialog, requestsModel, $http, $scope ) {

    let newRequestWindow = {
        template: newRequestTemplate,
        controller: 'newRequestController',
        controllerAs: 'newRequest'
    };

    angular.extend(this, {
        styles,
        dataOptions,
        newRequestForm,
        udRequestForm
    });


    requestsModel.loadUserSession();

    ///

    function newRequestForm() {
        requestsModel.toggleUserType(false);
        $mdDialog.show(newRequestWindow);
    }

    function udRequestForm() {
        requestsModel.toggleUserType(true);
        $mdDialog.show(newRequestWindow);
    }

}

export default Controller;
