import LIVR from 'livr';

LIVR.Validator.defaultAutoTrim(true);
var validator = new LIVR.Validator({
  serviceId: 'required',
  confidential: 'not_empty',
  requester: 'required',
  priority: ['required', { one_of: ['ORDINARY', 'HIGH'] }],
  title: 'required'
});

const validate = data => validator.validate(data);

export default validate;
