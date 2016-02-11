import { inject, tree } from 'state';
//import { addButton } from './actions';
import styles from './requests.less';
import newRequestTemplate from './new-request/new.tpl.html';
import config from './common/dataConfig';

function Controller($mdDialog) {
    //inject('buttons', this);

    this.styles = styles;
    this.dataOptions = config;

    this.newRequestForm = newRequestForm;
    this.dateFormat = dateFormat;

    ///

    function dateFormat(date) {
        return new Date(date).toLocalDateString();
    }

    function newRequestForm() {
      $mdDialog.show({
        template: newRequestTemplate,
        controller: 'newRequestController',
        controllerAs: 'newRequest'
      });
    }
}

export default Controller;
