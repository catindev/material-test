import controller from './one.controller.js';
import template from './one.tpl.html';
const bindings = {
    title: '@',
    secret: '<'
};

export default {
    bindings,
    controller,
    template
};
