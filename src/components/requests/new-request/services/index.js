import template from './services.tpl.html';
import controller from './services.controller';

const bindings = {
    data: '<',
    styles: '<',
    change: '&'
};

export default {
    bindings,
    template,
    controller
};
