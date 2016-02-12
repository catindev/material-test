import template from './requests.tpl.html';
import controller from './requests.controller.js';

const bindings = {
  session: '<',
  data: '<'
};

export default {
  bindings,
  template,
  controller,
  controllerAs: 'requests'
};
