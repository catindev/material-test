import template from './select.tpl.html';

const bindings = {
    title: '@',
    level: '@',
    items: '<',
    change: '&'
};

export default {
    bindings,
    template
};
