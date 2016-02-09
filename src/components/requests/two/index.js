import styles from './two.less';
import template from './two.html';

class controller {
    constructor() {
        this.styles = styles;
    }
}

const two = () => {
    let directive = {
    	scope: {},
        restrict: 'E',
        template,
        controller,
        controllerAs: 'two',
        bindToController: {
        	title: '@'
        }
    };
    return directive;
};

export default two;
