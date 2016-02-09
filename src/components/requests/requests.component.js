import template from './requests.tpl.html';
import controller from './requests.controller.js';

const bindings = { session: '=' };

export default {
  bindings,
  template,
  controller,
  controllerAs: 'requests'
};
